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
                                var rightPanel = Ext.getCmp('rightpanel');
                                rightPanel.setHtml(
                                    '<h3 style="font-size: 30px;">' + e.get('firstName') + ' ' + e.get('lastName') + '</h3>'
                                    + (e.get('telephone') ? ('<BR>' + e.get('telephone')) : '')
                                    + '<BR>' + e.get('city') + ', ' + e.get('state')
                                    + '<BR>' + e.get('email')
                                );
                                /*rightPanel.add({
                                    xtype: 'button',
                                    text: e.firstName
                                });*/
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