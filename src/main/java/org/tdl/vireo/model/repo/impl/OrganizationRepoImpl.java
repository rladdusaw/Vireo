package org.tdl.vireo.model.repo.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.TreeSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.tdl.vireo.model.Organization;
import org.tdl.vireo.model.OrganizationCategory;
import org.tdl.vireo.model.Submission;
import org.tdl.vireo.model.WorkflowStep;
import org.tdl.vireo.model.repo.OrganizationCategoryRepo;
import org.tdl.vireo.model.repo.OrganizationRepo;
import org.tdl.vireo.model.repo.SubmissionRepo;
import org.tdl.vireo.model.repo.WorkflowStepRepo;
import org.tdl.vireo.model.repo.custom.OrganizationRepoCustom;

public class OrganizationRepoImpl implements OrganizationRepoCustom {

    @Autowired
    private OrganizationRepo organizationRepo;

    @Autowired
    private OrganizationCategoryRepo organizationCategoryRepo;

    @Autowired
    private WorkflowStepRepo workflowStepRepo;

    @Autowired
    private SubmissionRepo submissionRepo;

    @Override
    public Organization create(String name, OrganizationCategory category) {
        Organization organization = organizationRepo.save(new Organization(name, category));
        category.addOrganization(organization);
        organizationCategoryRepo.save(category);
        return organizationRepo.findOne(organization.getId());
    }

    @Override
    @Transactional // this transactional is required to persist parent child relationship within
    public Organization create(String name, Organization parent, OrganizationCategory category) {
        Organization organization = create(name, category);
        parent.addChildOrganization(organization);
        parent = organizationRepo.save(parent);
        parent.getAggregateWorkflowSteps().forEach(ws -> {
            organization.addAggregateWorkflowStep(ws);
        });
        return organizationRepo.save(organization);
    }

    public Organization reorderWorkflowSteps(Organization organization, WorkflowStep ws1, WorkflowStep ws2) {
        organization.swapAggregateWorkflowStep(ws1, ws2);
        return organizationRepo.save(organization);
    }

    @Override
    public void delete(Organization organization) {
        OrganizationCategory category = organization.getCategory();
        category.removeOrganization(organization);
        organizationCategoryRepo.save(category);

        TreeSet<Organization> parentOrganizations = new TreeSet<Organization>(organization.getParentOrganizations());

        // Have all the parent organizations not have this one as their child anymore
        for (Organization parentOrganization : parentOrganizations) {
            parentOrganization.removeChildOrganization(organization);
            organizationRepo.save(parentOrganization);
        }

        TreeSet<Organization> childrenOrganizations = new TreeSet<Organization>(organization.getChildrenOrganizations());

        // Have all the child organizations get this one's parents as their parent
        for (Organization childOrganization : childrenOrganizations) {
            childOrganization.removeParentOrganization(organization);
            organizationRepo.save(childOrganization);

            parentOrganizations.parallelStream().forEach(parentOrganization -> {
                parentOrganization.addChildOrganization(childOrganization);
                organizationRepo.save(parentOrganization);
            });

            organization.removeChildOrganization(childOrganization);

            organization = organizationRepo.save(organization);
        }

        // Have all the submissions on this organization get this one's parent (one of them, anyway) as their new organization
        // TODO: for now, have to delete them if there is no parent org to attach them to.
        if (organization.getParentOrganizations().iterator().hasNext()) {

            Organization parentOrg = organization.getParentOrganizations().iterator().next();
            for (Submission sub : submissionRepo.findByOrganization(organization)) {
                sub.setOrganization(parentOrg);
            }
        } else {
            for (Submission sub : submissionRepo.findByOrganization(organization)) {
                submissionRepo.delete(sub);
            }
        }

        List<WorkflowStep> workflowStepsToDelete = new ArrayList<WorkflowStep>();
        List<WorkflowStep> workflowStepsToRemove = new ArrayList<WorkflowStep>();

        for (WorkflowStep ws : organization.getOriginalWorkflowSteps()) {
            workflowStepsToDelete.add(ws);
            workflowStepsToRemove.add(ws);
        }

        for (WorkflowStep ws : workflowStepsToRemove) {
            organization.removeOriginalWorkflowStep(ws);
        }

        List<WorkflowStep> workflow = new ArrayList<WorkflowStep>();

        for (WorkflowStep ws : organization.getAggregateWorkflowSteps()) {
            workflow.add(ws);
        }

        for (WorkflowStep ws : workflow) {
            organization.removeAggregateWorkflowStep(ws);
        }

        for (WorkflowStep ws : workflowStepsToDelete) {
            workflowStepRepo.delete(ws);
        }

        organizationRepo.delete(organization.getId());
    }

}
