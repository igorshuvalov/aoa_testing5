//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'aoa': 'app'
});
//</debug>

Ext.define('UserFilter', {
    singleton: true,
    filterKey: '',
    filterAction: function() {
        var value = this.filterKey;
        var practiceStore = Ext.getStore('LocalPractice').load();
        var doctorStore = Ext.getStore('LocalDoctor').load();
        
        practiceStore.clearFilter();
        doctorStore.clearFilter();

        if (value) {
            var searches = value.split(' '),
                regexps = [],
                i;

            for (i = 0; i < searches.length; i++) {
                if (!searches[i]) continue;

                regexps.push(new RegExp(searches[i], 'i'));
            }

            practiceStore.filter(function(record) {
                var matched = [];

                for (i = 0; i < regexps.length; i++) {
                    var search = regexps[i],
                        didMatch = record.get('name').match(search);

                    matched.push(didMatch);
                }

                if (regexps.length > 1 && matched.indexOf(false) != -1) {
                    return false;
                } else {
                    return matched[0];
                }
            });
            
            doctorStore.filter(function(record) {
                var matched = [];

                for (i = 0; i < regexps.length; i++) {
                    var search = regexps[i],
                        didMatch = record.get('name').match(search);

                    matched.push(didMatch);
                }

                if (regexps.length > 1 && matched.indexOf(false) != -1) {
                    return false;
                } else {
                    return matched[0];
                }
            });
        }
    }
});

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

    views: ['Main', 'sidebar', 'mainpanels', 'rightpanel', 'doctors', 'LocalPractice', 'LocalDoctor'],
	stores: ['Contacts', 'Assessment', 'DoctorAssessment', 'LocalPractice', 'LocalDoctor', 'LocalReference', 'LocalAssessment', 'usstates'],
	models: ['Contact', 'Assessment', 'LocalPractice', 'LocalDoctor', 'LocalReference', 'LocalAssessment', 'usstates'],
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
        Ext.fly('appLoadingIndicator').destroy();
        Ext.Viewport.add(Ext.create('aoa.view.Main'));
    }
});
