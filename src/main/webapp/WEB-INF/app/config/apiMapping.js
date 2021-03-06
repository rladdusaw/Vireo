// CONVENTION: must match model name, case sensitive
var apiMapping = {
    ActionLog: {},
    ControlledVocabulary: {
        validations: true,
        all: {
            'endpoint': '/private/queue',
            'controller': 'settings/controlled-vocabulary',
            'method': 'all'
        },
        listen: {
            'endpoint': '/channel',
            'controller': 'settings/controlled-vocabulary'
        },
        create: {
            'endpoint': '/private/queue',
            'controller': 'settings/controlled-vocabulary',
            'method': 'create'
        },
        update: {
            'endpoint': '/private/queue',
            'controller': 'settings/controlled-vocabulary',
            'method': 'update'
        },
        remove: {
            'endpoint': '/private/queue',
            'controller': 'settings/controlled-vocabulary',
            'method': 'remove'
        },
        reorder: {
            'endpoint': '/private/queue',
            'controller': 'settings/controlled-vocabulary'
        },
        sort: {
            'endpoint': '/private/queue',
            'controller': 'settings/controlled-vocabulary'
        },
        change: {
            'endpoint': '/channel',
            'controller': 'settings/controlled-vocabulary',
            'method': 'change'
        },
        downloadCSV: {
            'endpoint': '/private/queue',
            'controller': 'settings/controlled-vocabulary',
            'method': 'export'
        },
        uploadCSV: {
            'endpoint': '/private/queue',
            'controller': 'settings/controlled-vocabulary',
            'method': 'import'
        },
        confirmCSV: {
            'endpoint': '',
            'controller': 'settings/controlled-vocabulary',
            'method': 'compare',
            'file': null
        },
        cancel: {
            'endpoint': '/private/queue',
            'controller': 'settings/controlled-vocabulary',
            'method': 'cancel'
        },
        status: {
            'endpoint': '/private/queue',
            'controller': 'settings/controlled-vocabulary',
            'method': 'status'
        }
    },
    CustomActionDefinition: {
        validations: true,
        all: {
            'endpoint': '/private/queue',
            'controller': 'settings/custom-action',
            'method': 'all'
        },
        listen: {
            'endpoint': '/channel',
            'controller': 'settings/custom-action'
        },
        create: {
            'endpoint': '/private/queue',
            'controller': 'settings/custom-action',
            'method': 'create'
        },
        update: {
            'endpoint': '/private/queue',
            'controller': 'settings/custom-action',
            'method': 'update'
        },
        remove: {
            'endpoint': '/private/queue',
            'controller': 'settings/custom-action',
            'method': 'remove'
        },
        reorder: {
            'endpoint': '/private/queue',
            'controller': 'settings/custom-action'
        },
        sort: {
            'endpoint': '/private/queue',
            'controller': 'settings/custom-action'
        }
    },
    CustomActionValue: {
        validations: true,
        all: {
            'endpoint': '/private/queue',
            'controller': 'settings/custom-action',
            'method': 'all'
        },
        listen: {
            'endpoint': '/channel',
            'controller': 'settings/custom-action'
        }
    },
    Configuration: {
        lazy: true,
        validations: true,
        all: {
            'endpoint': '/private/queue',
            'controller': 'settings/configurable',
            'method': 'all'
        },
        listen: {
            'endpoint': '/channel',
            'controller': 'settings/configurables'
        },
        selectiveListen: {
            'endpoint': '/channel',
            'controller': 'settings/configurable'
        },
        create: {
            'endpoint': '/private/queue',
            'controller': 'settings/configurable',
            'method': 'create'
        },
        update: {
            'endpoint': '/private/queue',
            'controller': 'settings/configurable',
            'method': 'update'
        },
        reset: {
            'endpoint': '/private/queue',
            'controller': 'settings/configurable',
            'method': 'reset'
        },
        remove: {
            'endpoint': '/private/queue',
            'controller': 'settings/configurable',
            'method': 'remove'
        }
    },
    DepositLocation: {
        validations: true,
        all: {
            'endpoint': '/private/queue',
            'controller': 'settings/deposit-location',
            'method': 'all'
        },
        listen: {
            'endpoint': '/channel',
            'controller': 'settings/deposit-location'
        },
        create: {
            'endpoint': '/private/queue',
            'controller': 'settings/deposit-location',
            'method': 'create'
        },
        update: {
            'endpoint': '/private/queue',
            'controller': 'settings/deposit-location',
            'method': 'update'
        },
        remove: {
            'endpoint': '/private/queue',
            'controller': 'settings/deposit-location',
            'method': 'remove'
        },
        reorder: {
            'endpoint': '/private/queue',
            'controller': 'settings/deposit-location'
        },
        sort: {
            'endpoint': '/private/queue',
            'controller': 'settings/deposit-location'
        },
        testConnection: {
            'endpoint': '/private/queue',
            'controller': 'settings/deposit-location',
            'method': 'test-connection'
        }
    },
    DocumentType: {
        validations: true,
        all: {
            'endpoint': '/private/queue',
            'controller': 'settings/document-type',
            'method': 'all'
        },
        listen: {
            'endpoint': '/channel',
            'controller': 'settings/document-type'
        },
        create: {
            'endpoint': '/private/queue',
            'controller': 'settings/document-type',
            'method': 'create'
        },
        update: {
            'endpoint': '/private/queue',
            'controller': 'settings/document-type',
            'method': 'update'
        },
        remove: {
            'endpoint': '/private/queue',
            'controller': 'settings/document-type',
            'method': 'remove'
        },
        reorder: {
            'endpoint': '/private/queue',
            'controller': 'settings/document-type'
        },
        sort: {
            'endpoint': '/private/queue',
            'controller': 'settings/document-type'
        }
    },
    Embargo: {
        validations: true,
        all: {
            'endpoint': '/private/queue',
            'controller': 'settings/embargo',
            'method': 'all'
        },
        listen: {
            'endpoint': '/channel',
            'controller': 'settings/embargo'
        },
        create: {
            'endpoint': '/private/queue',
            'controller': 'settings/embargo',
            'method': 'create'
        },
        update: {
            'endpoint': '/private/queue',
            'controller': 'settings/embargo',
            'method': 'update'
        },
        remove: {
            'endpoint': '/private/queue',
            'controller': 'settings/embargo',
            'method': 'remove'
        },
        reorder: {
            'endpoint': '/private/queue',
            'controller': 'settings/embargo'
        },
        sort: {
            'endpoint': '/private/queue',
            'controller': 'settings/embargo'
        }
    },
    EmailTemplate: {
        validations: true,
        all: {
            'endpoint': '/private/queue',
            'controller': 'settings/email-template',
            'method': 'all'
        },
        listen: {
            'endpoint': '/channel',
            'controller': 'settings/email-template'
        },
        create: {
            'endpoint': '/private/queue',
            'controller': 'settings/email-template',
            'method': 'create'
        },
        update: {
            'endpoint': '/private/queue',
            'controller': 'settings/email-template',
            'method': 'update'
        },
        remove: {
            'endpoint': '/private/queue',
            'controller': 'settings/email-template',
            'method': 'remove'
        },
        reorder: {
            'endpoint': '/private/queue',
            'controller': 'settings/email-template'
        },
        sort: {
            'endpoint': '/private/queue',
            'controller': 'settings/email-template'
        }
    },
    FieldGloss: {
        validations: true,
        all: {
            'endpoint': '/private/queue',
            'controller': 'settings/field-gloss',
            'method': 'all'
        },
        listen: {
            'endpoint': '/channel',
            'controller': 'settings/field-gloss'
        },
        create: {
            'endpoint': '/private/queue',
            'controller': 'settings/field-gloss',
            'method': 'create'
        }
    },
    FieldPredicate: {
        validations: true,
        all: {
            'endpoint': '/private/queue',
            'controller': 'settings/field-predicates',
            'method': 'all'
        },
        one: {
            'endpoint': '/private/queue',
            'controller': 'settings/field-predicates'
        },
        listen: {
            'endpoint': '/channel',
            'controller': 'settings/field-predicates'
        },
        create: {
            'endpoint': '/private/queue',
            'controller': 'settings/field-predicates',
            'method': 'create'
        }
    },
    FieldValue: {
        validations: true,
        update: {
            'endpoint': '/private/queue',
            'controller': 'submission'
        }
    },
    GraduationMonth: {
        validations: true,
        all: {
            'endpoint': '/private/queue',
            'controller': 'settings/graduation-month',
            'method': 'all'
        },
        listen: {
            'endpoint': '/channel',
            'controller': 'settings/graduation-month'
        },
        create: {
            'endpoint': '/private/queue',
            'controller': 'settings/graduation-month',
            'method': 'create'
        },
        update: {
            'endpoint': '/private/queue',
            'controller': 'settings/graduation-month',
            'method': 'update'
        },
        remove: {
            'endpoint': '/private/queue',
            'controller': 'settings/graduation-month',
            'method': 'remove'
        },
        reorder: {
            'endpoint': '/private/queue',
            'controller': 'settings/graduation-month'
        },
        sort: {
            'endpoint': '/private/queue',
            'controller': 'settings/graduation-month'
        }
    },
    FieldProfile: {
        validations: true,
        all: {
            'endpoint': '/private/queue',
            'controller': 'field-profile',
            'method': 'all'
        },
        listen: {
            'endpoint': '/channel',
            'controller': 'field-profile'
        }
    },
    InputType: {
        validations: true,
        all: {
            'endpoint': '/private/queue',
            'controller': 'settings/input-types',
            'method': 'all'
        },
        listen: {
            'endpoint': '/channel',
            'controller': 'settings/input-types'
        },
        create: {
            'endpoint': '/private/queue',
            'controller': 'settings/input-types',
            'method': 'create'
        }
    },
    Language: {
        validations: true,
        all: {
            'endpoint': '/private/queue',
            'controller': 'settings/language',
            'method': 'all'
        },
        listen: {
            'endpoint': '/channel',
            'controller': 'settings/language'
        },
        create: {
            'endpoint': '/private/queue',
            'controller': 'settings/language',
            'method': 'create'
        },
        update: {
            'endpoint': '/private/queue',
            'controller': 'settings/language',
            'method': 'update'
        },
        remove: {
            'endpoint': '/private/queue',
            'controller': 'settings/language',
            'method': 'remove'
        },
        reorder: {
            'endpoint': '/private/queue',
            'controller': 'settings/language'
        },
        sort: {
            'endpoint': '/private/queue',
            'controller': 'settings/language'
        },
        proquest: {
            'endpoint': '/private/queue',
            'controller': 'settings/language',
            'method': 'proquest'
        }
    },
    Note: {
        validations: true,
        all: {
            'endpoint': '/private/queue',
            'controller': 'note',
            'method': 'all'
        },
        listen: {
            'endpoint': '/channel',
            'controller': 'note'
        }
    },
    Organization: {
        validations: true,
        all: {
            'endpoint': '/private/queue',
            'controller': 'organization',
            'method': 'all'
        },
        addEmailWorkflowRule: {
            'endpoint': '/private/queue',
            'controller': 'organization',
            'metod': 'add-email-workflow-rule'
        },
        editEmailWorkflowRule: {
            'endpoint': '/private/queue',
            'controller': 'organization',
            'metod': 'edit-email-workflow-rule'
        },
        get: {
            'endpoint': '/private/queue',
            'controller': 'organization'
        },
        remove: {
            'endpoint': '/private/queue',
            'controller': 'organization',
            'method': 'delete'
        },
        removeEmailWorkflowRule: {
            'endpoint': '/private/queue',
            'controller': 'organization',
            'method': 'remove-email-workflow-rule'
        },
        changeEmailWorkflowRuleActivation: {
            'endpoint': '/private/queue',
            'controller': 'organization',
            'method': 'change-email-workflow-rule-activation'
        },
        listen: {
            'endpoint': '/channel',
            'controller': 'organizations'
        },
        selectiveListen: {
            'endpoint': '/channel',
            'controller': 'organization'
        },
        create: {
            'endpoint': '/private/queue',
            'controller': 'organization'
        },
        update: {
            'endpoint': '/private/queue',
            'controller': 'organization',
            'method': 'update'
        },
        workflow: {
            'endpoint': '/private/queue',
            'controller': 'organization'
        },
        children: {
            'endpoint': '/private/queue',
            'controller': 'organization'
        },
        addWorkflowStep: {
            'endpoint': '/private/queue',
            'controller': 'organization'
        },
        updateWorkflowStep: {
            'endpoint': '/private/queue',
            'controller': 'organization'
        },
        reorderWorkflowStep: {
            'endpoint': '/private/queue',
            'controller': 'organization'
        },
        deleteWorkflowStep: {
            'endpoint': '/private/queue',
            'controller': 'organization'
        }
    },
    OrganizationCategory: {
        validations: true,
        all: {
            'endpoint': '/private/queue',
            'controller': 'settings/organization-category',
            'method': 'all'
        },
        listen: {
            'endpoint': '/channel',
            'controller': 'settings/organization-category'
        },
        create: {
            'endpoint': '/private/queue',
            'controller': 'settings/organization-category',
            'method': 'create'
        },
        update: {
            'endpoint': '/private/queue',
            'controller': 'settings/organization-category',
            'method': 'update'
        },
        remove: {
            'endpoint': '/private/queue',
            'controller': 'settings/organization-category',
            'method': 'remove'
        },
        reorder: {
            'endpoint': '/private/queue',
            'controller': 'settings/organization-category'
        },
        sort: {
            'endpoint': '/private/queue',
            'controller': 'settings/organization-category'
        }
    },
    Packager: {
        validations: true,
        all: {
            'endpoint': '/private/queue',
            'controller': 'packager',
            'method': 'all'
        },
        listen: {
            'endpoint': '/channel',
            'controller': 'packager'
        }
    },
    Submission: {
        lazy: true,
        validations: true,
        all: {
            'endpoint': '/private/queue',
            'controller': 'submission',
            'method': 'all'
        },
        addComment: {
            'endpoint': '/private/queue',
            'controller': 'submission',
            'method': 'add-comment'
        },
        sendEmail: {
            'endpoint': '/private/queue',
            'controller': 'submission',
            'method': 'send-email'
        },
        assignTo: {
            'endpoint': '/private/queue',
            'controller': 'submission',
            'method': 'assign'
        },
        changeStatus: {
            'endpoint': '/private/queue',
            'controller': 'submission',
            'method': 'change-status'
        },
        publish: {
            'endpoint': '/private/queue',
            'controller': 'submission',
            'method': 'publish'
        },
        batchPublish: {
            'endpoint': '/private/queue',
            'controller': 'submission',
            'method': 'batch-publish'
        },
        submitDate: {
            'endpoint': '/private/queue',
            'controller': 'submission',
            'method': 'submit-date'
        },
        one: {
            'endpoint': '/private/queue',
            'controller': 'submission'
        },
        remove: {
            'endpoint': '/private/queue',
            'controller': 'submission',
            'method': 'delete'
        },
        listen: {
            'endpoint': '/channel',
            'controller': 'submission'
        },
        actionLogListen: {
            'endpoint': '/channel',
            'controller': 'submission'
        },
        fieldValuesListen: {
            'endpoint': '/channel',
            'controller': 'submission'
        },
        fieldValueRemovedListen: {
            'endpoint': '/channel',
            'controller': 'submission'
        },
        create: {
            'endpoint': '/private/queue',
            'controller': 'submission',
            'method': 'create'
        },
        query: {
            'endpoint': '/private/queue',
            'controller': 'submission',
            'method': 'query'
        },
        saveFieldValue: {
            'endpoint': '/private/queue',
            'controller': 'submission'
        },
        saveReviewerNotes: {
            'endpoint': '/private/queue',
            'controller': 'submission'
        },
        sendAdvisorEmail: {
            'endpoint': '/private/queue',
            'controller': 'submission'
        },
        removeFieldValue: {
            'endpoint': '/private/queue',
            'controller': 'submission'
        },
        batchUpdateSubmissionState: {
            'endpoint': '/private/queue',
            'controller': 'submission',
            'method': 'batch-update-state'
        },
        batchAssignTo: {
            'endpoint': '/private/queue',
            'controller': 'submission',
            'method': 'batch-assign-to'
        },
        fileInfo: {
            'endpoint': '/private/queue',
            'controller': 'submission',
            'method': 'file-info'
        },
        file: {
            'endpoint': '/private/queue',
            'controller': 'submission',
            'method': 'file'
        },
        renameFile: {
            'endpoint': '/private/queue',
            'controller': 'submission',
            'method': 'rename-file'
        },
        removeFile: {
            'endpoint': '/private/queue',
            'controller': 'submission',
            'method': 'remove-file'
        },
        needsCorrection: {
            'endpoint': '/private/queue',
            'controller': 'submission',
            'method': 'needs-correction'
        },
        updateAdvisorApproval: {
            'endpoint': '/private/queue',
            'controller': 'submission',
            'method': 'update-advisor-approval'
        },
        updateCustomActionValue: {
            'endpoint': '/private/queue',
            'controller': 'submission',
            'method': 'update-custom-action-value'
        }
    },
    StudentSubmission: {
        lazy: true,
        all: {
            'endpoint': '/private/queue',
            'controller': 'submission',
            'method': 'all-by-user'
        },
        changeStatus: {
            'endpoint': '/private/queue',
            'controller': 'submission',
            'method': 'change-status'
        },
        one: {
            'endpoint': '/private/queue',
            'controller': 'submission'
        },
        listen: {
            'endpoint': '/channel',
            'controller': 'submission',
            'method': 'user'
        },
        create: {
            'endpoint': '/private/queue',
            'controller': 'submission',
            'method': 'create'
        },
        submitCorrections: {
            'endpoint': '/private/queue',
            'controller': 'submission',
            'method': 'submit-corrections'
        },
        saveFieldValue: {
            'endpoint': '/private/queue',
            'controller': 'submission'
        },
        validateFieldValue: {
            'endpoint': '/private/queue',
            'controller': 'submission'
        },
        removeFieldValue: {
            'endpoint': '/private/queue',
            'controller': 'submission'
        },
        fileInfo: {
            'endpoint': '/private/queue',
            'controller': 'submission',
            'method': 'file-info'
        },
        file: {
            'endpoint': '/private/queue',
            'controller': 'submission',
            'method': 'file'
        },
        renameFile: {
            'endpoint': '/private/queue',
            'controller': 'submission',
            'method': 'rename-file'
        },
        removeFile: {
            'endpoint': '/private/queue',
            'controller': 'submission',
            'method': 'remove-file'
        },
        archiveFile: {
            'endpoint': '/private/queue',
            'controller': 'submission',
            'method': 'archive-file'
        },
        addMessage: {
            'endpoint': '/private/queue',
            'controller': 'submission',
            'method': 'add-message'
        }
    },
    AdvisorSubmission: {
        lazy: true,
        getByHash: {
            'endpoint': '/private/queue',
            'controller': 'submission',
            'method': 'advisor-review'
        },
        listen: {
            'endpoint': '/channel',
            'controller': 'submission',
            'method': 'advisor'
        },
        file: {
            'endpoint': '/private/queue',
            'controller': 'submission',
            'method': 'file'
        },
        updateAdvisorApproval: {
            'endpoint': '/private/queue',
            'controller': 'submission',
            'method': 'update-advisor-approval'
        },
        fileInfo: {
            'endpoint': '/private/queue',
            'controller': 'submission',
            'method': 'file-info'
        }
    },
    SubmissionListColumn: {
        validations: true,
        all: {
            'endpoint': '/private/queue',
            'controller': 'submission-list',
            'method': 'all-columns'
        },
        listen: {
            'endpoint': '/channel',
            'controller': 'submission-list'
        }
    },
    SubmissionState: {
        validations: true,
        all: {
            'endpoint': '/private/queue',
            'controller': 'submission-state',
            'method': 'all'
        },
        listen: {
            'endpoint': '/channel',
            'controller': 'submission-state'
        }
    },
    ManagerSubmissionListColumn: {
        validations: true,
        all: {
            'endpoint': '/private/queue',
            'controller': 'submission-list',
            'method': 'columns-by-user'
        },
        pageSize: {
            'endpoint': '/private/queue',
            'controller': 'submission-list',
            'method': 'pagesize-by-user'
        },
        listen: {
            'endpoint': '/channel',
            'controller': 'managers-submission-list'
        },
        update: {
            'endpoint': '/private/queue',
            'controller': 'submission-list',
            'method': 'update-user-columns'
        },
        reset: {
            'endpoint': '/private/queue',
            'controller': 'submission-list',
            'method': 'reset-user-columns'
        }
    },
    ManagerFilterColumn: {
        validations: true,
        all: {
            'endpoint': '/private/queue',
            'controller': 'submission-list',
            'method': 'filter-columns-by-user'
        },
        listen: {
            'endpoint': '/channel',
            'controller': 'filter-columns'
        },
        update: {
            'endpoint': '/private/queue',
            'controller': 'submission-list',
            'method': 'update-user-filter-columns'
        }
    },
    User: {
        validations: true,
        instantiate: {
            'endpoint': '/private/queue',
            'controller': 'user',
            'method': 'credentials'
        },
        all: {
            'endpoint': '/private/queue',
            'controller': 'user',
            'method': 'all'
        },
        listen: {
            'endpoint': '/channel',
            'controller': 'user'
        },
        update: {
            'endpoint': '/private/queue',
            'controller': 'user',
            'method': 'update'
        }
    },
    UserSettings: {
        lazy: true,
        instantiate: {
            'endpoint': '/private/queue',
            'controller': 'user',
            'method': 'settings'
        },
        update: {
            'endpoint': '/private/queue',
            'controller': 'user',
            'method': 'settings/update'
        },
        listen: {
            'endpoint': '/channel',
            'controller': 'user/settings'
        }
    },
    WorkflowStep: {
        validations: true,
        all: {
            'endpoint': '/private/queue',
            'controller': 'workflow-step',
            'method': 'all'
        },
        listen: {
            'endpoint': '/channel',
            'controller': 'workflow-step'
        },
        create: {
            'endpoint': '/private/queue',
            'controller': 'workflow-step',
            'method': 'create'
        },
        update: {
            'endpoint': '/private/queue',
            'controller': 'workflow-step',
            'method': 'update'
        },
        remove: {
            'endpoint': '/private/queue',
            'controller': 'workflow-step',
            'method': 'remove'
        },
        reorder: {
            'endpoint': '/private/queue',
            'controller': 'workflow-step'
        },
        sort: {
            'endpoint': '/private/queue',
            'controller': 'workflow-step'
        },
        addFieldProfile: {
            'endpoint': '/private/queue',
            'controller': 'workflow-step'
        },
        updateFieldProfile: {
            'endpoint': '/private/queue',
            'controller': 'workflow-step'
        },
        removeFieldProfile: {
            'endpoint': '/private/queue',
            'controller': 'workflow-step'
        },
        reorderFieldProfile: {
            'endpoint': '/private/queue',
            'controller': 'workflow-step'
        },
        addNote: {
            'endpoint': '/private/queue',
            'controller': 'workflow-step'
        },
        updateNote: {
            'endpoint': '/private/queue',
            'controller': 'workflow-step'
        },
        removeNote: {
            'endpoint': '/private/queue',
            'controller': 'workflow-step'
        },
        reorderNote: {
            'endpoint': '/private/queue',
            'controller': 'workflow-step'
        }
    },
    NamedSearchFilterGroup: {
        validations: true,
        instantiate: {
            'endpoint': '/private/queue',
            'controller': 'submission-list',
            'method': 'active-filters'
        },
        setFilter: {
            'endpoint': '/private/queue',
            'controller': 'submission-list',
            'method': 'set-active-filter'
        },
        listen: {
            'endpoint': '/channel',
            'controller': 'active-filters'
        },
        addFilter: {
            'endpoint': '/private/queue',
            'controller': 'submission-list',
            'method': 'add-filter-criterion'
        },
        removeFilter: {
            'endpoint': '/private/queue',
            'controller': 'submission-list'
        },
        clearFilters: {
            'endpoint': '/private/queue',
            'controller': 'submission-list',
            'method': 'clear-filter-criteria'
        }
    },
    SavedFilter: {
        validations: true,
        all: {
            'endpoint': '/private/queue',
            'controller': 'submission-list',
            'method': 'all-saved-filter-criteria'
        },
        listen: {
            'endpoint': '/channel',
            'controller': 'saved-filters'
        },
        create: {
            'endpoint': '/private/queue',
            'controller': 'submission-list',
            'method': 'save-filter-criteria'
        },
        remove: {
            'endpoint': '/private/queue',
            'controller': 'submission-list',
            'method': 'remove-saved-filter'
        }
    }
};
