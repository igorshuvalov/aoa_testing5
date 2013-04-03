Ext.define('aoa.view.Contacts', {
    extend: 'Ext.List',
    xtype: 'contacts',
    requires: [
        'Ext.form.*',
        'Ext.field.*',
        'Ext.Button',
        'Ext.Toolbar',

        'Ext.data.Store',
        'Ext.data.proxy.LocalStorage',
		'aoa.model.LocalPractice',
        'aoa.model.LocalDoctor',
        'aoa.model.LocalReference',
		'Ext.carousel.Carousel'
    ],	
    config: {		
		items: [
			{
                    xtype: 'toolbar',
                    docked: 'top',
					cls: 'aoa-list-search-toolbar',
					items: [
						{ xtype: 'spacer' },
						{
							xtype: 'button',
							text: 'Add Account',
							cls: 'aoa-left-panel-btn1',
							ui: 'normal',
							width: 237,
							handler: function() {
                                var associatedSurgeonsIDs = new Array();
								if (aoa.modals.newPractice == null) {
									aoa.modals.newPractice = Ext.Viewport.add({
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
												title: 'Add New Practice',
												cls: 'aoa-modal-toolbar-type-b',										
												items: [
													{
														scope: this,
														cls: 'aoa-modal-btn1',
														ui: 'back',
														text: 'Back',
														handler: function() {
															aoa.modals.newPractice.hide();
														}													
													},
													{
														xtype: 'spacer'
													},
													{
														ui: 'normal',
														scope: this,
														text: 'Done',
														cls: 'aoa-modal-btn1',
														id: 'save-new-practice',
														handler: function() {
															var form = Ext.getCmp('add-new-practice-form'),
																formValues = form.getValues();
															console.log(formValues)
															if(formValues.name.length == 0){
																Ext.get('practice-name-required').addCls('warning')
															}else{
                                                                var date = new Date();
                                                                formValues.practiceid = date.getTime();
                                                                var localPracticeStore = Ext.getStore('LocalPractice');
                                                                var localPracticeModel = Ext.create('aoa.model.LocalPractice', formValues);
                                                                localPracticeStore.add(localPracticeModel);
                                                                aoa.modals.newPractice.hide();
                                                                form.reset();
                                                                for ( var i = 0; i < associatedSurgeonsIDs.length; i++) {
                                                                    var localReferenceStore = Ext.getStore('LocalReference');
                                                                    var localReferenceModel = Ext.create('aoa.model.LocalReference', {
                                                                        'referenceid' : date.getTime(),
                                                                        'practiceid' : formValues.practiceid,
                                                                        'doctorid' : associatedSurgeonsIDs[i],
                                                                        'assessmentid' : null
                                                                    });
                                                                    localReferenceStore.add(localReferenceModel);
                                                                }
															}
														}													
													}
												]

											},
											{
												html: 
													'<div class="aoa-modal-note">'+
													'	<span class="aoa-note-title">Enter the account details</span>'+
													'	<span class="aoa-note-subtitle">*Indicates required field.</span>'+
													'</div>'
											},
											{											
												xtype: 'formpanel',
												height: 430,
												cls: 'aoa-form-panel',
												scrollable: null,
												id: 'add-new-practice-form',
												items: [
													{
														xtype: 'toolbar',
														docked: 'bottom',
														cls: 'aoa-list-search-toolbar',
														items: [
															{ xtype: 'spacer' },
															{
																ui: 'normal',
																cls: 'aoa-btn-default-type-a',
																text: 'Add Associated Surgeons',
																scope: this,
																handler: function(){
																	aoa.modals.newPractice.hide();
																	if(aoa.modals.newDoctor == null){
																		aoa.modals.newDoctor = Ext.Viewport.add({
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
																			height: 610,
																			width: 650,
																			styleHtmlContent: true,										
																			items: [
																				{
																					docked: 'top',
																					xtype: 'toolbar',
																					title: 'Add Associated Surgeon',
																					cls: 'aoa-modal-toolbar-type-b',										
																					items: [
																						{
																							scope: this,
																							cls: 'aoa-modal-btn1',
																							ui: 'back',
																							text: 'Back',
																							handler: function() {
																								aoa.modals.newDoctor.hide();
																								aoa.modals.newPractice.show();
																							}
																						},
																						{
																							xtype: 'spacer'
																						},
																						{
																							ui: 'normal',
																							scope: this,
																							text: 'Done',
																							cls: 'aoa-modal-btn1',
																							handler: function() {
																								var form = Ext.getCmp('add-new-doctor-form'),
																									formValues = form.getValues(),
																									errFields = 0;

																								if(formValues.firstName.length == 0){
																									Ext.get('new-doctor-firstname-required').addCls('warning');
																									errFields++;
																								}
																								if(formValues.lastName.length == 0){
																									Ext.get('new-doctor-lastname-required').addCls('warning');
																									errFields++;
																								}
																								if(errFields == 0){
                                                                                                    var date = new Date();
                                                                                                    formValues.doctorid = date.getTime();
                                                                                                    var localDoctorStore = Ext.getStore('LocalDoctor');
                                                                                                    var localDoctorModel = Ext.create('aoa.model.LocalDoctor', formValues);
                                                                                                    localDoctorStore.add(localDoctorModel);
                                                                                                    aoa.modals.newDoctor.hide();
                                                                                                    aoa.modals.newPractice.show();
                                                                                                    form.reset();
                                                                                                    associatedSurgeonsIDs[associatedSurgeonsIDs.length] = formValues.doctorid;
																								}
																							}
																						}
																					]
																				},
																				{
																					html: 
																						'<div class="aoa-modal-note">'+
																						'	<span class="aoa-note-title">Enter the account details</span>'+
																						'	<span class="aoa-note-subtitle">*Indicates required field.</span>'+
																						'</div>'
																				},
																				{
																					xtype: 'formpanel',
																					height: 482,
																					cls: 'aoa-form-panel',
																					scrollable: null,
																					id: 'add-new-doctor-form',
																					items: [
																						{
																							xtype: 'toolbar',
																							docked: 'bottom',
																							cls: 'aoa-list-search-toolbar',
																							items: [
																								{ xtype: 'spacer' },
																								{
																									ui: 'normal',
																									cls: 'aoa-btn-default-type-a',
																									text: 'Save & add another',
																									scope: this,
																									handler: function() {
																										var form = Ext.getCmp('add-new-doctor-form'),
																											formValues = form.getValues();
																										if(formValues.firstName.length == 0 || formValues.lastName.length == 0){
																											// integrate required*
																										}else{
                                                                                                            var date = new Date();
                                                                                                            formValues.doctorid = date.getTime();
                                                                                                            var localDoctorStore = Ext.getStore('LocalDoctor');
                                                                                                            var localDoctorModel = Ext.create('aoa.model.LocalDoctor', formValues);
                                                                                                            localDoctorStore.add(localDoctorModel);
                                                                                                            form.reset();
                                                                                                            associatedSurgeonsIDs[associatedSurgeonsIDs.length] = formValues.doctorid;
																										}
																									}
																								}
																							]
																						},
																						{
																							xtype: 'fieldset',
																							defaults: {
																								labelAlign: 'left',
																								labelWidth: '30%'
																							},														
																							items: aoa.forms.newDoctor
																						}
																					]
																				}
																			],
																			scrollable: null
																		});
																	}

																	aoa.modals.newDoctor.show();																
																}
															}													
														]
													},
													{
														xtype: 'fieldset',
														defaults: {															
															labelAlign: 'left',
															labelWidth: '30%'
														},														
														items: aoa.forms.newPractice
													}
												]
											},
										],
										scrollable: null
									});
								}else{
									aoa.modals.newPractice.show()
								}
							}
						},
						{ xtype: 'spacer' }					
					]
			},		
			{
                xtype: 'toolbar',
                docked: 'top',
				cls: 'aoa-list-search-toolbar',
				items: [
					{ xtype: 'spacer' },
					{
                        xtype: 'searchfield',
					    placeHolder: 'Search...',
					    listeners: {
						    scope: this,
						    clearicontap: function() {
                                var practiceStore = Ext.getStore('LocalPractice').load();
                                var doctorStore = Ext.getStore('LocalDoctor').load();
                                
                                practiceStore.clearFilter();
                                doctorStore.clearFilter();
                            },
						    keyup: function(field) {
                                var value = field.getValue();
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
					    },
					},
					{ xtype: 'spacer' }
				]
			},
			{
				xtype: 'toolbar',
				docked: 'top',
				cls: 'aoa-list-search-toolbar',
				items: [
					{ xtype: 'spacer' },
					{
						xtype: 'segmentedbutton',
						width: 237,
						items: [
							{ 
                                text: 'By Account', 
                                pressed: true , 
                                cls: 'aoa-left-panel-toggle',
                                ui: 'normal',
                                handler: function() {
                                    Ext.getCmp('localdoctorlist').hide();
                                    Ext.getCmp('localpracticelist').show();
                                }
                            },
							{ 
                                text: 'By Surgeon',
                                cls: 'aoa-left-panel-toggle',
                                ui: 'normal',
                                handler: function() {
                                    Ext.getCmp('localpracticelist').hide();
                                    Ext.getCmp('localdoctorlist').show();
                                }
                            }
						]
					},
					{ xtype: 'spacer' }
				]
			},
			{
				xtype: 'localpracticelist'
			},
            {
                xtype: 'localdoctorlist'
            }
		]
    }
});		
		
var aoa = {
	forms: {	
		newDoctor: [
			{
				xtype: 'textfield',
				name: 'firstName',
				label: 'First Name',
				placeHolder: 'Required',
				id: 'new-doctor-firstname-required',
				required: true,
				listeners: {
					keyup: function(e, eOpts){
						var form = Ext.getCmp('add-new-doctor-form'),
							formValues = form.getValues();						
						if(formValues.firstName.length>0){
							Ext.get('new-doctor-firstname-required').removeCls('warning')
						}
					}				
				}
			},
			{
				xtype: 'textfield',
				name: 'lastName',
				label: 'Last Name',
				placeHolder: 'Required',
				id: 'new-doctor-lastname-required',
				required: true,
				listeners: {
					keyup: function(e, eOpts){
						var form = Ext.getCmp('add-new-doctor-form'),
							formValues = form.getValues();						
						if(formValues.lastName.length>0){
							Ext.get('new-doctor-lastname-required').removeCls('warning')
						}
					}				
				}
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
		],	
		newPractice: [
			{
				xtype: 'textfield',
				name: 'name',
				label: 'Name of Practice',
				placeHolder: 'Required',
				id: 'practice-name-required',
				required: true,
				listeners: {
					keyup: function(e, eOpts){
						var form = Ext.getCmp('add-new-practice-form'),
							formValues = form.getValues();						
						if(formValues.name.length>0){
							Ext.get('practice-name-required').removeCls('warning')
						}
					}				
				}
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
	},
	modals: {
		newPractice: null,
		newDoctor: null
	}
};