Ext.define('aoa.view.LocalDoctor', {
    extend: 'Ext.List',
    xtype: 'localdoctorlist',
    requires: [
        'Ext.data.Store'
    ],
    config: {
        id: 'localdoctorlist',
        title: 'Address Book',
        cls: 'x-contacts',
        store: 'LocalDoctor',
        grouped: true,
        height: 600,
        pinHeaders: false,
        xtype: 'list',
        emptyText: '<div style="margin-top: 20px; text-align: center">No Matching Items</div>',
        hidden: true,
        itemTpl: [
            '<div class="aoa-normal-20">{firstName} {lastName}</div>'
        ].join(''),
        listeners: {
            itemtap: function(list, index, item, e) {
                UserProcess.doctorid = e.get('doctorid');
                var localDoctorStore = Ext.getStore('LocalDoctor');
                var doctor;
                localDoctorStore.each(function(record) {
                    if (record.get('doctorid') == UserProcess.doctorid) {
                        doctor = record;
                    }
                });
                
                var localAssessmentStore = Ext.getStore('LocalAssessment');
                var localReferenceStore = Ext.getStore('LocalReference');
                var assessmentStore = Ext.getStore('Assessment');
                assessmentStore.removeAll();
                localReferenceStore.each(function(reference) {
                    if (reference.get('doctorid') == UserProcess.doctorid) {
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
                if (LocalDoctor.panels.doctorDetails != null) {
                    LocalDoctor.panels.doctorDetails.destroy();
                }
                LocalDoctor.panels.doctorDetails = Ext.create('Ext.Panel', {
                    title: 'Details',
                    layout: 'vbox',
                    width: '100%',
                    items: [
                        {
                            xtype: 'panel',
                            flex: 1,
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'panel',
                                    flex: 2,
                                    items: [
                                        {
                                            id: 'doctorDetails',
                                            html: 
                                                '<div class="aoa-right-panel-top-text">'+
                                                '    <ul>'+
                                                '        <li class="aoa-group-header">' + e.get('firstName') + ' ' + e.get('lastName') + '</li>'+
                                                (e.get('telephone') ? '        <li class="aoa-group-item">' + e.get('telephone') + '</li>' : '')+
                                                (e.get('address1') ? '        <li class="aoa-group-item">' + e.get('address1') + '</li>' : '')+
                                                (e.get('address2') ? '        <li class="aoa-group-item">' + e.get('address2') + '</li>' : '')+
                                                (e.get('email') ? '        <li class="aoa-group-item">' + e.get('email') + '</li>' : '')+
                                                '    </ul>'+                        
                                                '</div>'
                                        
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
                                                        if (LocalDoctor.modals.editDoctor == null) {
                                                            LocalDoctor.modals.editDoctor = Ext.Viewport.add({
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
                                                                        title: 'Edit Doctor',
                                                                        cls: 'aoa-modal-toolbar-type-b',                                        
                                                                        items: [
                                                                            {
                                                                                scope: this,
                                                                                cls: 'aoa-modal-btn1',
                                                                                ui: 'back',
                                                                                text: 'Cancel',
                                                                                handler: function() {
                                                                                    LocalDoctor.modals.editDoctor.hide();
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
                                                                                id: 'edit-doctor',
                                                                                handler: function() {
                                                                                    var form = Ext.getCmp('edit-doctor-form'),
                                                                                        formValues = form.getValues();
                                                                                    if(formValues.firstName.length == 0){
                                                                                        Ext.get('edit-doctor-firstname-required').addCls('warning');
                                                                                    }
                                                                                    else if(formValues.lastName.length == 0){
                                                                                        Ext.get('edit-doctor-lastname-required').addCls('warning');
                                                                                    }
                                                                                    else{
                                                                                        doctor.set('firstName', formValues.firstName);
                                                                                        doctor.set('lastName', formValues.lastName);
                                                                                        doctor.set('address1', formValues.address1);
                                                                                        doctor.set('address2', formValues.address2);
                                                                                        doctor.set('city', formValues.city);
                                                                                        doctor.set('state', formValues.state);
                                                                                        doctor.set('zip', formValues.zip);
                                                                                        doctor.set('telephone', formValues.telephone);
                                                                                        doctor.set('email', formValues.email);
                                                                                        doctor.commit();
                                                                                        Ext.getCmp('doctorDetails').setHtml(
                                                                                            '<div class="aoa-right-panel-top-text">'+
                                                                                            '    <ul>'+
                                                                                            '        <li class="aoa-group-header">' + doctor.get('firstName') + ' ' + doctor.get('lastName') + '</li>'+
                                                                                            (doctor.get('telephone') ? '        <li class="aoa-group-item">' + doctor.get('telephone') + '</li>' : '')+
                                                                                            (doctor.get('address1') ? '        <li class="aoa-group-item">' + doctor.get('address1') + '</li>' : '')+
                                                                                            (doctor.get('address2') ? '        <li class="aoa-group-item">' + doctor.get('address2') + '</li>' : '')+
                                                                                            (doctor.get('email') ? '        <li class="aoa-group-item">' + doctor.get('email') + '</li>' : '')+
                                                                                            '    </ul>'+                        
                                                                                            '</div>'
                                                                                        );
                                                                                        LocalDoctor.modals.editDoctor.hide();
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
                                                                        id: 'edit-doctor-form',
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
                                                                                        name: 'firstName',
                                                                                        label: 'First Name of Doctor',
                                                                                        placeHolder: 'Required',
                                                                                        id: 'edit-doctor-firstname-required',
                                                                                        required: true,
                                                                                        value: doctor.get('firstName'),
                                                                                        listeners: {
                                                                                            keyup: function(e, eOpts){
                                                                                                var form = Ext.getCmp('edit-doctor-form'),
                                                                                                    formValues = form.getValues();                        
                                                                                                if(formValues.firstName.length>0){
                                                                                                    Ext.get('edit-doctor-firstname-required').removeCls('warning');
                                                                                                }
                                                                                            }                
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        xtype: 'textfield',
                                                                                        name: 'lastName',
                                                                                        label: 'Last Name of Doctor',
                                                                                        placeHolder: 'Required',
                                                                                        id: 'edit-doctor-lastname-required',
                                                                                        required: true,
                                                                                        value: doctor.get('lastName'),
                                                                                        listeners: {
                                                                                            keyup: function(e, eOpts){
                                                                                                var form = Ext.getCmp('edit-doctor-form'),
                                                                                                    formValues = form.getValues();                        
                                                                                                if(formValues.lastName.length>0){
                                                                                                    Ext.get('edit-doctor-lastname-required').removeCls('warning');
                                                                                                }
                                                                                            }                
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        xtype: 'textfield',
                                                                                        name: 'address1',
                                                                                        label: 'Address 1',
                                                                                        placeHolder: '123 Street',
                                                                                        value: (doctor.get('address1') ? doctor.get('address1') : '')
                                                                                    },
                                                                                    {
                                                                                        xtype: 'textfield',
                                                                                        name: 'address2',
                                                                                        label: 'Address 2',
                                                                                        placeHolder: 'Suite Name',
                                                                                        value: (doctor.get('address2') ? doctor.get('address2') : '')
                                                                                    },
                                                                                    {
                                                                                        xtype: 'textfield',
                                                                                        name: 'city',
                                                                                        label: 'City',
                                                                                        placeHolder: 'City',
                                                                                        value: (doctor.get('city') ? doctor.get('city') : '')
                                                                                    },
                                                                                    {
                                                                                        xtype: 'selectfield',
                                                                                        name: 'state',
                                                                                        label: 'State',
                                                                                        placeHolder: 'Select',
                                                                                        valueField: 'state',
                                                                                        displayField: 'state',
                                                                                        store: 'usstates',
                                                                                        value: (doctor.get('state') ? doctor.get('state') : '')
                                                                                    },
                                                                                    {
                                                                                        xtype: 'textfield',
                                                                                        name: 'zip',
                                                                                        label: 'Zip Code',
                                                                                        placeHolder: '12345',
                                                                                        value: (doctor.get('zip') ? doctor.get('zip') : '')
                                                                                    },
                                                                                    {
                                                                                        xtype: 'textfield',
                                                                                        name: 'telephone',
                                                                                        label: 'Telephone',
                                                                                        placeHolder: '555-555-5555',
                                                                                        value: (doctor.get('telephone') ? doctor.get('telephone') : '')
                                                                                    },    
                                                                                    {
                                                                                        xtype: 'emailfield',
                                                                                        name: 'email',
                                                                                        label: 'Email',
                                                                                        placeHolder: 'email@domain.com',
                                                                                        value: (doctor.get('email') ? doctor.get('email') : '')
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                ],
                                                                scrollable: null
                                                            });
                                                        }
                                                        
                                                        LocalDoctor.modals.editDoctor.show();
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
                                                                    'doctorid' : UserProcess.doctorid,
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
                rightPanel.add([LocalDoctor.panels.doctorDetails]);
            }
        }
    }
});

var LocalDoctor = {
    panels: {
        doctorDetails: null
    },
    modals: {
        editDoctor: null
    }
};