Ext.define('aoa.view.LocalPractice', {
    extend: 'Ext.List',
    xtype: 'localpracticelist',
    requires: [
        'Ext.data.Store'
    ],
    config: {
        id: 'localpracticelist',
        title: 'Address Book',
        cls: 'x-contacts',
        store: 'LocalPractice',
        grouped: true,
        height: 600,
        pinHeaders: false,                
        xtype: 'list',
        emptyText: '<div style="margin-top: 20px; text-align: center">No Matching Items</div>',
        itemTpl: [
            '<div class="aoa-normal-20">{name}</div>'
        ].join(''),
        listeners: {
            itemtap: function(list, index, item, e) {
                UserProcess.practiceid = e.get('practiceid');
                var localPracticeStore = Ext.getStore('LocalPractice');
                var practice;
                localPracticeStore.each(function(record) {
                    if (record.get('practiceid') == UserProcess.practiceid) {
                        practice = record;
                    }
                });                
                
                var localAssessmentStore = Ext.getStore('LocalAssessment');
                var localReferenceStore = Ext.getStore('LocalReference');
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
                if (LocalPractice.panels.practiceDetails != null) {
                    LocalPractice.panels.practiceDetails.destroy();
                }
                LocalPractice.panels.practiceDetails = Ext.create('Ext.Panel', {
                    title: 'Details',
                    layout: 'vbox',
                    width: '100%',
                    items: [
                        {
                            xtype: 'panel',
                            flex: 1,
                            layout: 'hbox',
                            height: 200,
                            items: [
                                {
                                    xtype: 'panel',
                                    flex: 2,
                                    items: [
                                        {
                                            id: 'practiceDetails',
                                            html: 
                                                '<div class="aoa-right-panel-top-text">'+
                                                '    <ul>'+
                                                '        <li class="aoa-group-header">' + e.get('name') + '</li>'+
                                                (e.get('telephone') ? '        <li class="aoa-group-item">' + e.get('telephone') + '</li>' : '')+
                                                (e.get('address1') ? '        <li class="aoa-group-item">' + e.get('address1') + '</li>' : '')+
                                                (e.get('address2') ? '        <li class="aoa-group-item">' + e.get('address2') + '</li>' : '')+
                                                (e.get('email') ? '        <li class="aoa-group-item">' + e.get('email') + '</li>' : '')+
                                                '    </ul>'+                        
                                                '</div>'
                                        },
                                        {
                                            xtype: 'toolbar',
                                            docked: 'bottom',
                                            cls: 'aoa-list-search-toolbar',
                                            items: [
                                                {
                                                    ui: 'small',
                                                    cls: 'aoa-btn-default-type-a',
                                                    text: 'View Surgeons'
                                                },
                                                { xtype: 'spacer' }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    items: [
                                        {
                                            xtype: 'toolbar',
                                            docked: 'top',
                                            cls: 'aoa-list-search-toolbar',
                                            items: [
                                                { xtype: 'spacer' },
                                                {
                                                    ui: 'small',
                                                    cls: 'aoa-btn-default-type-a',
                                                    text: 'Edit',
                                                    handler: function() {
                                                        if (LocalPractice.modals.editPractice == null) {
                                                            LocalPractice.modals.editPractice = Ext.Viewport.add({
                                                                xtype: 'panel',
                                                                modal: true,
                                                                cls: 'aoa-modal-bg-none',
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
                                                                        title: 'Edit Practice',
                                                                        cls: 'aoa-modal-toolbar-type-b',                                        
                                                                        items: [
                                                                            {
                                                                                scope: this,
                                                                                cls: 'aoa-modal-btn1',
                                                                                ui: 'back',
                                                                                text: 'Cancel',
                                                                                handler: function() {
                                                                                    LocalPractice.modals.editPractice.hide();
                                                                                }
                                                                            },
                                                                            {
                                                                                xtype: 'spacer'
                                                                            },
                                                                            {
                                                                                ui: 'normal',
                                                                                scope: this,
                                                                                text: 'Update',
                                                                                cls: 'aoa-modal-btn1',
                                                                                id: 'edit-practice',
                                                                                handler: function() {
                                                                                    var form = Ext.getCmp('edit-practice-form'),
                                                                                        formValues = form.getValues();
                                                                                    if(formValues.name.length == 0){
                                                                                        Ext.get('edit-practice-name-required').addCls('warning');
                                                                                    }else{
                                                                                        practice.set('name', formValues.name);
                                                                                        practice.set('address1', formValues.address1);
                                                                                        practice.set('address2', formValues.address2);
                                                                                        practice.set('city', formValues.city);
                                                                                        practice.set('state', formValues.state);
                                                                                        practice.set('zip', formValues.zip);
                                                                                        practice.set('telephone', formValues.telephone);
                                                                                        practice.set('email', formValues.email);
                                                                                        practice.commit();
                                                                                        Ext.getCmp('practiceDetails').setHtml(
                                                                                            '<div class="aoa-right-panel-top-text">'+
                                                                                            '    <ul>'+
                                                                                            '        <li class="aoa-group-header">' + practice.get('name') + '</li>'+
                                                                                            (practice.get('telephone') ? '        <li class="aoa-group-item">' + practice.get('telephone') + '</li>' : '')+
                                                                                            (practice.get('address1') ? '        <li class="aoa-group-item">' + practice.get('address1') + '</li>' : '')+
                                                                                            (practice.get('address2') ? '        <li class="aoa-group-item">' + practice.get('address2') + '</li>' : '')+
                                                                                            (practice.get('email') ? '        <li class="aoa-group-item">' + practice.get('email') + '</li>' : '')+
                                                                                            '    </ul>'+                        
                                                                                            '</div>'
                                                                                        );
                                                                                        LocalPractice.modals.editPractice.hide();
                                                                                    }
                                                                                }                                                    
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        html: 
                                                                            '<div class="aoa-modal-note">'+
                                                                            '    <span class="aoa-note-title">Edit the account details</span>'+
                                                                            '    <span class="aoa-note-subtitle">*Indicates required field.</span>'+
                                                                            '</div>'
                                                                    },
                                                                    {
                                                                        xtype: 'formpanel',
                                                                        height: 430,
                                                                        cls: 'aoa-form-panel',
                                                                        scrollable: null,
                                                                        id: 'edit-practice-form',
                                                                        items: [
                                                                            {
                                                                                xtype: 'fieldset',
                                                                                defaults: {
                                                                                    labelAlign: 'left',
                                                                                    labelWidth: '30%'
                                                                                },                                                        
                                                                                items: [
                                                                                    {
                                                                                        xtype: 'textfield',
                                                                                        name: 'name',
                                                                                        label: 'Name of Practice',
                                                                                        placeHolder: 'Required',
                                                                                        id: 'edit-practice-name-required',
                                                                                        required: true,
                                                                                        value: practice.get('name'),
                                                                                        listeners: {
                                                                                            keyup: function(e, eOpts){
                                                                                                var form = Ext.getCmp('edit-practice-form'),
                                                                                                    formValues = form.getValues();                        
                                                                                                if(formValues.name.length>0){
                                                                                                    Ext.get('edit-practice-name-required').removeCls('warning');
                                                                                                }
                                                                                            }                
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        xtype: 'textfield',
                                                                                        name: 'address1',
                                                                                        label: 'Address 1',
                                                                                        placeHolder: '123 Street',
                                                                                        value: (practice.get('address1') ? practice.get('address1') : '')
                                                                                    },
                                                                                    {
                                                                                        xtype: 'textfield',
                                                                                        name: 'address2',
                                                                                        label: 'Address 2',
                                                                                        placeHolder: 'Suite Name',
                                                                                        value: (practice.get('address2') ? practice.get('address2') : '')
                                                                                    },
                                                                                    {
                                                                                        xtype: 'textfield',
                                                                                        name: 'city',
                                                                                        label: 'City',
                                                                                        placeHolder: 'City',
                                                                                        value: (practice.get('city') ? practice.get('city') : '')
                                                                                    },
                                                                                    {
                                                                                        xtype: 'selectfield',
                                                                                        name: 'state',
                                                                                        label: 'State',
                                                                                        placeHolder: 'Select',
                                                                                        valueField: 'state',
                                                                                        displayField: 'state',
                                                                                        store: 'usstates',
                                                                                        value: (practice.get('state') ? practice.get('state') : '')
                                                                                    },
                                                                                    {
                                                                                        xtype: 'textfield',
                                                                                        name: 'zip',
                                                                                        label: 'Zip Code',
                                                                                        placeHolder: '12345',
                                                                                        value: (practice.get('zip') ? practice.get('zip') : '')
                                                                                    },
                                                                                    {
                                                                                        xtype: 'textfield',
                                                                                        name: 'telephone',
                                                                                        label: 'Telephone',
                                                                                        placeHolder: '555-555-5555',
                                                                                        value: (practice.get('telephone') ? practice.get('telephone') : '')
                                                                                    },    
                                                                                    {
                                                                                        xtype: 'emailfield',
                                                                                        name: 'email',
                                                                                        label: 'Email',
                                                                                        placeHolder: 'email@domain.com',
                                                                                        value: (practice.get('email') ? practice.get('email') : '')
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                ],
                                                                scrollable: null
                                                            });
                                                        }
                                                        
                                                        LocalPractice.modals.editPractice.show();
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            flex: 2,
                            cls: 'aoa-vbox-bottom-panel',
                            items: [
                                {
                                    xtype: 'panel',
                                    layout: 'hbox',
                                    items: [
                                        {
                                            flex: 2,
                                            html: '<h4>Assessments</h4>'                                    
                                        },
                                        {
                                            xtype: 'panel',
                                            flex: 1,                                
                                            items: [
                                                {
                                                    xtype: 'toolbar',
                                                    docked: 'top',
                                                    cls: 'aoa-list-search-toolbar',
                                                    items: [
                                                        { xtype: 'spacer' },
                                                        {
                                                            ui: 'small',
                                                            cls: 'aoa-btn-default-type-a',
                                                            text: 'Add',
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
                                                                localAssessmentStore.add(localAssessmentModel);
                                                                
                                                                localReferenceModel = Ext.create('aoa.model.LocalReference', {
                                                                    'referenceid' : now.getTime(),
                                                                    'practiceid' : UserProcess.practiceid,
                                                                    'assessmentid' : assessmentID
                                                                });
                                                                localReferenceStore.add(localReferenceModel);
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    height: 138,
                                    xtype: 'list',
                                    store: 'Assessment',
                                    cls: 'aoa-right-panel-list',
                                    useComponents: true,
                                    itemTpl:
                                        '<div class="aoa-right-list-item">'+
                                        '    <ul class="details">'+
                                        '        <li><span class="aoa-bold-17">{regDate}</span></li>'+
                                        '        <li><span class="aoa-normal-17">{status}</span></li>'+
                                        '        <li class="aoa-list-item-opt aoa-normal-17">{name}</li>'+
                                        '    </ul>'+
                                        '<div class="deleteplaceholder"></div>'+
                                        '</div>',
                                    onItemDisclosure: function(){
                                    },
                                    listeners: {
                                        itemswipe: function(dataview, ix, item, record, event, options) {
                                            if (event.direction == "left") {
                                                console.log(record.get('name'));
                                            }
                                        },
                                        itemtap: function(dataview, ix, item, record, event, options){
                                            var store = Ext.getStore('LocalDoctors');
                                            if (!this.overlay) {
                                                this.overlay = Ext.Viewport.add({
                                                    xtype: 'panel',
                                                    modal: true,
                                                    cls: 'aoa-modal-bg-none',
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
                                                    height: 485,
                                                    width: 650,
                                                    styleHtmlContent: true,                                        
                                                    items: [
                                                        {
                                                            docked: 'top',
                                                            xtype: 'toolbar',
                                                            title: 'Surgeons',
                                                            cls: 'aoa-modal-toolbar-type-b',                                        
                                                            items: [
                                                                {
                                                                    scope: this,
                                                                    cls: 'aoa-modal-btn1',
                                                                    ui: 'back',
                                                                    text: 'Back',
                                                                    handler: function() {
                                                                        this.overlay.hide();
                                                                    }                                                    
                                                                },
                                                                {
                                                                    xtype: 'spacer'
                                                                },
                                                                { iconCls: 'add',iconMask: true, cls: 'aoa-add-btn'}
                                                            ]

                                                        },
                                                        {
                                                            title: 'Doctors List',
                                                            cls: 'aoa-plain-list',
                                                            store: 'LocalDoctors',                
                                                            grouped: false,
                                                            height: 390,
                                                            pinHeaders: false,                
                                                            xtype: 'list',
                                                            emptyText: '<div style="margin-top: 20px; text-align: center">No Matching Items</div>',
                                                            itemTpl: [
                                                                '<div class="aoa-bold-17">{title} {firstName} {lastName}</div>'
                                                            ].join('')
                                                        }                                            
                                                    ],
                                                    scrollable: null
                                                });
                                            }else{
                                                this.overlay.show()
                                            }
                                        }
                                    },

                                    variableHeights: false
                                },
                                {
                                    xtype: 'textareafield',
                                    placeHolder: 'Notes',
                                    width: '75%',
                                    cls: 'aoa-right-panel-textarea'
                                }                        
                            ]
                        }
                    ]
                });
                
                var rightPanel = Ext.getCmp('rightpanel');
                rightPanel.removeAll(true, true);
                rightPanel.add([LocalPractice.panels.practiceDetails]);
            }
        }
    }
});

var LocalPractice = {
    panels: {
        practiceDetails: null
    },
    modals: {
        editPractice: null
    }
};