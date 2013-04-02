Ext.define('aoa.view.LocalPractice', {
    extend: 'Ext.List',
    xtype: 'localpracticelist',
    requires: [
        'Ext.data.Store'
    ],
    config: {
        id: 'localpracticelist',
        title: 'Practice List',
        cls: 'x-contacts',
        store: 'LocalPractice',
		height: 500,
        grouped: true,
        indexBar: true,
        itemTpl: '{name}',
        listeners: {
            itemtap: function(list, index, item, e) {
                UserProcess.practiceid = e.get('practiceid');
                var localAssessmentStore = Ext.getStore('LocalAssessment');
                var localReferenceStore = Ext.getStore('LocalReference');
                localAssessmentStore.load();
                localReferenceStore.load();
                var assessmentStore = Ext.getStore('Assessment');
                assessmentStore.removeAll();
                localReferenceStore.each(function(reference) {
                    if (reference.get('practiceid') == UserProcess.practiceid) {
                        localAssessmentStore.each(function(assessment) {
                            if (assessment.get('assessmentid') == reference.get('assessmentid')) {
                                var assessmentModel = Ext.create('aoa.model.Assessment', {
                                    'assessmentid' : assessment.get('assessmentid'),
                                    'regDate' : assessment.get('regDate'),
                                    'parsedRegDate': new Date(assessment.get('regDate')).toDateString(),
                                    'status' : assessment.get('status')
                                });
                                assessmentStore.add(assessmentModel);
                            }
                        });
                    }
                });
                assessmentStore.sort('regDate', 'DESC');
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
                                            layout: 'vbox',
                                            width: '40%',
                                            items: [
                                                {
                                                    xtype: 'panel',
                                                    html: e.get('name')
                                                },
                                                {
                                                    xtype: 'spacer',
                                                    padding: '5'
                                                },
                                                {
                                                    xtype: 'button',
                                                    text: 'View Doctors',
                                                    width: '50%',
                                                    handler: function() {
                                                        if (!this.overlay) {
                                                            this.overlay = Ext.Viewport.add({
                                                                xtype: 'panel',
                                                                layout: 'hbox',
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
                                                                                ui: 'normal',
                                                                                text: 'Cancel',
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
                                                                                    this.overlay.hide();
                                                                                }
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        xtype: 'doctors',
                                                                        width: '40%',
                                                                        height: '90%',
                                                                        listeners: {
                                                                            itemtap: function(list, index, item, e) {
                                                                                var doctorDetailsPanel = Ext.getCmp('doctor-details');
                                                                                doctorDetailsPanel.setHtml(e.get('name') + ' ' + e.get('lastName'));
                                                                            }
                                                                        },
                                                                        items: [
                                                                            { 
                                                                                xtype: 'button', 
                                                                                docked: 'top', 
                                                                                text: 'Add Doctors' 
                                                                            },
                                                                            {
                                                                                xtype: 'toolbar',
                                                                                docked: 'top',
                                                                                items: [
                                                                                    {
                                                                                        xtype: 'searchfield',
                                                                                        placeHolder: 'Search...',
                                                                                        listeners: {
                                                                                            scope: this
                                                                                        }
                                                                                    },
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        xtype: 'panel',
                                                                        items: [
                                                                            {
                                                                                xtype: 'panel',
                                                                                id: 'doctor-details',
                                                                                html: 'doctor details'
                                                                            },
                                                                            {
                                                                                xtype: 'panel',
                                                                                items: [
                                                                                    {
                                                                                        xtype: 'list',
                                                                                        height: 138,
                                                                                        store: 'DoctorAssessment',
                                                                                        itemTpl: '<div><strong>{regDate}</strong> {status} {name}</div>'
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ],
                                                                scrollable: null
                                                            });
                                                        }else{
                                                            this.overlay.show();
                                                        }
                                                    }
                                                }
                                            ]
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
                                                var now = new Date();
                                                var assessmentID = now.getTime();
                                                
                                                assessmentModel = Ext.create('aoa.model.Assessment', {
                                                    'assessmentid' : assessmentID,
                                                    'regDate' : now.getTime(),
                                                    'parsedRegDate': now.toDateString(),
                                                    'status' : 'In Progress'
                                                });
                                                assessmentStore.add(assessmentModel);
                                                
                                                localAssessmentModel = Ext.create('aoa.model.LocalAssessment', {
                                                    'assessmentid' : assessmentID,
                                                    'status' : 'In Progress',
                                                    'regDate' : now.getTime(),
                                                });
                                                localAssessmentStore.load();
                                                localAssessmentStore.add(localAssessmentModel);
                                                localAssessmentStore.sync();
                                                
                                                localReferenceModel = Ext.create('aoa.model.LocalReference', {
                                                    'referenceid' : now.getTime(),
                                                    'practiceid' : UserProcess.practiceid,
                                                    'assessmentid' : assessmentID
                                                });
                                                localReferenceStore.load();
                                                localReferenceStore.add(localReferenceModel);
                                                localReferenceStore.sync();
                                            }
                                        }
                                    ]
                                },
                                {
                                    xtype: 'list',
                                    height: 138,
                                    store: 'Assessment',
                                    itemTpl: [
                                        '<div><strong>',
                                        '{parsedRegDate}',
                                        '</strong> {status}</div>'
                                    ].join('')
                                }
                            ]
                        }
                    ]
                });
                
                var rightPanel = Ext.getCmp('rightpanel');
                rightPanel.removeAll(true, true);
                rightPanel.add([detailsPanel]);
            }
        }
    }
});
