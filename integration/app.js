//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'aoa': 'app'
});
//</debug>

Ext.define('UserProcess', {
    singleton: true,
    practiceid: null,
    doctorid: null,
    assessmentid: null
});

Ext.application({
    name: 'aoa',

    requires: [
        'Ext.MessageBox'
    ],

    views: ['Main','assessmentedit','mainpanels','Contacts','LocalPractice','LocalDoctor','rightpanel'],
	stores: ['Assessments','Doctors','LocalDoctors','LocalPractice','LocalDoctor','usstates','newPractice','newDoctor','LocalReference','LocalAssessment','Assessment'],
	models: ['Contact','Assessments','Doctors','LocalDoctors','LocalPractice','LocalDoctor','PracticeFields','usstates','DoctorFields','LocalReference','LocalAssessment','Assessment'],
	constrollers: ['Application'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('aoa.view.Main'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
