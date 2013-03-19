Ext.define('testing.view.mainpanels', {
    extend: 'Ext.Panel',
    xtype: 'mainpanels',
	requires: [
		'Ext.TitleBar'
	],
    searchkey: '',
    filtertype: 'practice',
    filterAction: function() {
        var value = this.searchkey,
            store = Ext.getStore('Contacts');

        store.clearFilter();

        if (value) {
            var searches = value.split(' '),
                regexps = [],
                i;

            for (i = 0; i < searches.length; i++) {
                if (!searches[i]) continue;

                regexps.push(new RegExp(searches[i], 'i'));
            }

            store.filter(function(record) {
                var matched = [];

                for (i = 0; i < regexps.length; i++) {
                    var search = regexps[i],
                        didMatch = record.get('firstName').match(search) || record.get('lastName').match(search);

                    matched.push(didMatch);
                }

                if (regexps.length > 1 && matched.indexOf(false) != -1) {
                    return false;
                } else {
                    return matched[0];
                }
            });
        }
        
        store.filter(function(record) {
            if (record.get('usertype') == filtertype)
                return true;
            else
                return false;
        });
    },
    config: {
        layout: 'hbox',
        padding: '20 10',
        height: 500,
		items: [
			{
				xtype: 'panel',
                padding: '10 20 10 10',
				flex: 1,
				/*html: 'Left Panel, 1/3rd of total size',
				style: 'background-color: #5E99CC;'*/
                
				items: [
                    {
                        xtype : 'button',
                        ui: 'normal',
                        text: 'Add Practice'
                    },
                    {
                        xtype: 'spacer',
                        padding: '10'
                    },
                    {
                        xtype: 'searchfield',
                        ui: 'round',
                        placeHolder: 'Search...',
                        
                        listeners: {
                            scope: this,
                            clearicontap: function() {
                                this.searchkey = '';
                                this.filterAction();
                            },
                            keyup: function(field) {
                                this.searchkey = field.getValue();
                                this.filterAction();
                            },
                        },
                    },
                    {
                        xtype: 'spacer',
                        padding: '10'
                    },
                    {
                        xtype: 'segmentedbutton',
                        items: [
                            {
                                text: 'By Practice', 
                                pressed: true,
                                width: '50%',
                                listeners: {
                                    activate: function() {
                                        //this.filtertype = 'practice';
                                        //this.filterAction();
                                    }
                                }
                            },
                            {
                                text: 'By Doctor',
                                width: '50%',
                                listeners: {
                                    activate: function() {
                                        //this.filtertype = 'doctor';
                                        //this.filterAction();
                                    }
                                }                                
                            }
                        ]
                    },
                    {
                        xtype: 'spacer',
                        padding: '10'
                    },
					{
						xtype: 'contacts'
					}
				]
			},
			{
				xtype: 'panel',
				flex: 2,
				html: 'Right Panel, 2/3rds of total size',
				style: 'background-color: #759E60;'
			}
		]
    }
});