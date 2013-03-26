Ext.define('testing.view.mainpanels', {
    extend: 'Ext.Panel',
    xtype: 'mainpanels',
	requires: [
		'Ext.TitleBar'
	],
    config: {
        id: 'mainpanels',
        layout: 'hbox',
        padding: '20 10',
        height: 500,
		items: [
			{
				xtype: 'panel',
                padding: '10 20 10 10',
                width: '35%',
				flex: 1,                
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
                                UserFilter.filterKey = '';
                                UserFilter.filterAction();
                            },
                            keyup: function(field) {
                                UserFilter.filterKey = field.getValue();
                                UserFilter.filterAction();
                            }
                        }
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
                                        UserFilter.filterAction();
                                    }
                                },
                                handler: function() {
                                    UserFilter.filterType = 'practice';
                                    UserFilter.filterAction();
                                }
                            },
                            {
                                text: 'By Doctor',
                                width: '50%',
                                handler: function() {
                                    UserFilter.filterType = 'doctor';
                                    UserFilter.filterAction();
                                }
                            }
                        ]
                    },
                    {
                        xtype: 'spacer',
                        padding: '10'
                    },
					{
						xtype: 'contacts',
                        listeners: {
                            itemtap: function(list, index, item, e) {
                                var detailsPanel = Ext.create('Ext.Panel', {
                                    title: 'Details',
                                    layout: 'vbox',
                                    width: '100%',
                                    items: [
                                        {// Details information
                                            xtype: 'panel',
                                            layout: 'vbox',
                                            items: [
                                                {// Display information
                                                    xtype: 'panel',
                                                    layout: 'hbox',
                                                    items: [
                                                        {
                                                            xtype: 'panel',
                                                            html: e.get('firstName') + ' ' + e.get('lastName'),
                                                            width: '40%'
                                                        },
                                                        {
                                                            xtype: 'panel',
                                                            html: e.get('telephone') + '<BR>' + e.get('city') + ', ' + e.get('state'),
                                                            width: '40%'
                                                        },
                                                        {
                                                            xtype: 'button',
                                                            text: 'Edit',
                                                            width: '20%'
                                                        }
                                                    ]
                                                },
                                                {
                                                    xtype: 'spacer',
                                                    padding: '20'
                                                },
                                                {// Note box
                                                    xtype: 'textareafield',
                                                    ui: 'round',
                                                    name: 'note',
                                                    fieldLabel: 'Note',
                                                    placeHolder: 'Note',
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'panel',
                                            padding: '20'
                                        },
                                        {// Assessments
                                            xtype: 'panel',
                                            layout: 'vbox',
                                            items: [
                                                {
                                                    xtype: 'toolbar',
                                                    html: 'Assessments',
                                                    padding: 10,
                                                    items: [
                                                        {
                                                            xtype: 'button',
                                                            text: 'Add',
                                                            docked: 'right',
                                                            width: 100,
                                                            handler: function() {
                                                                var assessmentStore = Ext.getStore('Assessment');
                                                                var assessmentModel = Ext.create('testing.model.Assessment', {
                                                                    'regDate' : '26/03/2013',
                                                                    'status' : 'In Progress',
                                                                    'name' : 'Marcus Welby'
                                                                });
                                                                assessmentStore.add(assessmentModel);
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    xtype: 'list',
                                                    height: 138,
                                                    store: 'Assessment',
                                                    itemTpl: '<div><strong>{regDate}</strong> {status} {name}</div>'
                                                }
                                            ]
                                        }
                                    ]
                                });
                                
                                var assessmentStore = Ext.getStore('Assessment');
                                assessmentStore.removeAll();
                                
                                var rightPanel = Ext.getCmp('rightpanel');
                                rightPanel.removeAll(true, true);
                                rightPanel.add([detailsPanel]);
                            }
                        }
					}
				]
			},
			{
                xtype: 'rightpanel',
                width: '65%',
                height: 500
            }
		]
    }
});