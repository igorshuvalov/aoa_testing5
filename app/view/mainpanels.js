Ext.define('aoa.view.mainpanels', {
    extend: 'Ext.Panel',
    xtype: 'mainpanels',
	requires: [
		'Ext.TitleBar',
        'Ext.form.*',
        'Ext.field.*',
        'Ext.Button',
        'Ext.Toolbar',
        'Ext.data.Store',
        'Ext.data.proxy.LocalStorage',
        'aoa.model.LocalPractice'
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
                        text: 'Add Practice',
                        handler: function() {
                            if (!this.overlay) {
                                this.overlay = Ext.Viewport.add({
                                    xtype: 'panel',
                                    modal: true,
                                    hideOnMaskTap: false,
                                    showAnimation: {
                                        type: 'popIn',
                                        duration: 250,
                                        easing: 'ease-out'
                                    },
                                    hideAnimation: {
                                        type: 'popOut',
                                        duration: 250,
                                        easing: 'ease-out'
                                    },
                                    centered: true,
                                    height: 560,
                                    width: 650,
                                    styleHtmlContent: true,                                        
                                    items: [
                                        {
                                            docked: 'top',
                                            xtype: 'toolbar',
                                            title: 'Add New Practice',
                                            items: [
                                                {
                                                    scope: this,
                                                    ui: 'back',
                                                    text: 'Back',
                                                    handler: function() {
                                                        this.overlay.hide();
                                                    }
                                                },
                                                {
                                                    xtype: 'spacer'
                                                },
                                                {
                                                    ui: 'normal',
                                                    scope: this,
                                                    text: 'Done',
                                                    id: 'save-new-practice',
                                                    handler: function() {
                                                        var form = Ext.getCmp('add-new-practice-form'),
                                                            formValues = form.getValues();
                                                        if(formValues.name.length == 0) {
                                                            // integrate required*
                                                        }
                                                        else {
                                                            var date = new Date();
                                                            formValues.practiceid = date.getTime();
                                                            var localPracticeStore = Ext.getStore('LocalPractice');
                                                            var localPracticeModel = new aoa.model.LocalPractice(formValues);
                                                            localPracticeStore.load();
                                                            localPracticeStore.add(localPracticeModel);
                                                            localPracticeStore.sync();
                                                            this.overlay.hide();
                                                            form.reset();
                                                        }
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            html: 
                                                '<div class="aoa-modal-note">'+
                                                '    <span class="aoa-note-title">Enter the account details</span>'+
                                                '    <span class="aoa-note-subtitle">*Indicates required field.</span>'+
                                                '</div>'
                                        },
                                        {
                                            xtype: 'formpanel',
                                            height: 430,
                                            scrollable: null,
                                            id: 'add-new-practice-form',
                                            items: [
                                                {
                                                    xtype: 'toolbar',
                                                    docked: 'bottom',
                                                    items: [
                                                        { xtype: 'spacer' },
                                                        {
                                                            ui: 'normal',
                                                            text: 'Add Associated Surgeons'
                                                        }
                                                    ]
                                                },
                                                {
                                                    xtype: 'fieldset',
                                                    defaults: {                                                            
                                                        labelAlign: 'left',
                                                        labelWidth: '30%'
                                                    },                                                        
                                                    items: [
                                                        {
                                                            xtype: 'textfield',
                                                            id: 'name',
                                                            name: 'name',
                                                            label: 'Name of Practice',
                                                            placeHolder: 'Required',
                                                            required: true
                                                        },
                                                        {
                                                            xtype: 'textfield',
                                                            name: 'address1',
                                                            label: 'Address 1',
                                                            placeHolder: '123 Street'
                                                        },
                                                        {
                                                            xtype: 'textfield',
                                                            name: 'address2',
                                                            label: 'Address 2',
                                                            placeHolder: 'Suite Name'
                                                        },
                                                        {
                                                            xtype: 'textfield',
                                                            name: 'city',
                                                            label: 'City',
                                                            placeHolder: 'City'
                                                        },
                                                        {
                                                            xtype: 'selectfield',
                                                            name: 'state',
                                                            label: 'State',
                                                            placeHolder: 'Select',
                                                            valueField: 'state',
                                                            displayField: 'state',
                                                            store: 'usstates'

                                                        },
                                                        {
                                                            xtype: 'textfield',
                                                            name: 'zip',
                                                            label: 'Zip Code',
                                                            placeHolder: '12345'
                                                        },
                                                        {
                                                            xtype: 'textfield',
                                                            name: 'telephone',
                                                            label: 'Telephone',
                                                            placeHolder: '555-555-5555'
                                                        },
                                                        {
                                                            xtype: 'emailfield',
                                                            name: 'email',
                                                            label: 'Email',
                                                            placeHolder: 'email@domain.com'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                    ],
                                    scrollable: null
                                });
                            }else{
                                this.overlay.show()
                            }
                        }
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
                                handler: function() {
                                    Ext.getCmp('localdoctorlist').hide();
                                    Ext.getCmp('localpracticelist').show();
                                }
                            },
                            {
                                text: 'By Doctor',
                                width: '50%',
                                handler: function() {
                                    Ext.getCmp('localpracticelist').hide();
                                    Ext.getCmp('localdoctorlist').show();
                                }
                            }
                        ]
                    },
                    {
                        xtype: 'spacer',
                        padding: '10'
                    },
					{
						xtype: 'localpracticelist'
					},
                    {
                        xtype: 'localdoctorlist'
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