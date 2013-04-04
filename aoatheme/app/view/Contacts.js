var aoaCon = {

};
Ext.define('aoatheme.view.Contacts', {
    extend: 'Ext.List',
    xtype: 'contacts',
    requires: [
        'Ext.form.*',
        'Ext.field.*',
        'Ext.Button',
        'Ext.Toolbar',

        'Ext.data.Store',
		'aoatheme.model.PracticeFields',
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
															if(formValues.practice_name.length == 0){
																Ext.get('practice-name-required').addCls('warning')
															}else{
																var store = Ext.getStore('newPractice')
																store.load();			
																store.add(formValues);
																store.sync();																
																aoa.modals.newPractice.hide();
																form.reset()
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
																									errFields++
																								}
																								if(formValues.lastName.length == 0){
																									Ext.get('new-doctor-lastname-required').addCls('warning');
																									errFields++
																								}
																								if(errFields == 0){
																									var store = Ext.getStore('newDoctor')
																									store.load();			
																									store.add(formValues);
																									store.sync();																
																									aoa.modals.newDoctor.hide();
																									aoa.modals.newPractice.show();
																									form.reset()
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
																											var store = Ext.getStore('newDoctor');
																											console.log(formValues)
																											store.load();			
																											store.add(formValues);
																											store.sync();																
																											form.reset()
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
						{xtype: 'spacer'},
						{
							xtype: 'searchfield',
							placeHolder: 'Search...',
							scope: this,
							listeners: {								
								clearicontap: function(){
									var list = Ext.getCmp('practice-list');
									list.onSearchClearIconTap()									
								},
								keyup: function(){
									var val = this.getValue();
									var list = Ext.getCmp('practice-list');
									list.onSearchKeyUp(val)
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
						xtype: 'segmentedbutton',
						width: 237,
						items: [
							
							{ text: 'By Account', pressed: true , cls: 'aoa-left-panel-toggle',ui: 'normal'}, // on
							{ text: 'By Surgeon', cls: 'aoa-left-panel-toggle',ui: 'normal'},										
						]
					},
					{ xtype: 'spacer' }
				]
			},
			{
				title: 'Practice',
				cls: 'x-contacts',
				store: 'newPractice',				
				grouped: true,
				height: 600,
				pinHeaders: false,
				id: 'practice-list',
				xtype: 'list',
				emptyText: '<div style="margin-top: 20px; text-align: center">No Matching Items</div>',
				scope: this,
				itemTpl: [
					'<div class="aoa-normal-20">{practice_name}</div>'
				].join(''),
				onSearchKeyUp: function(field) {
					//get the store and the value of the field
					var value = field,
						store = this.getStore();

					//first clear any current filters on thes tore
					store.clearFilter();

					//check if a value is set first, as if it isnt we dont have to do anything
					if (value) {
						//the user could have entered spaces, so we must split them so we can loop through them all
						var searches = value.split(' '),
							regexps = [],
							i;

						//loop them all
						for (i = 0; i < searches.length; i++) {
							//if it is nothing, continue
							if (!searches[i]) continue;

							//if found, create a new regular expression which is case insenstive
							regexps.push(new RegExp(searches[i], 'i'));
						}

						//now filter the store by passing a method
						//the passed method will be called for each record in the store
						store.filter(function(record) {
							var matched = [];

							//loop through each of the regular expressions
							for (i = 0; i < regexps.length; i++) {
								var search = regexps[i],
									didMatch = record.get('practice_name').match(search);

								//if it matched the first or last name, push it into the matches array
								matched.push(didMatch);
							}

							//if nothing was found, return false (dont so in the store)
							if (regexps.length > 1 && matched.indexOf(false) != -1) {
								return false;
							} else {
								//else true true (show in the store)
								return matched[0];
							}
						});
					}
				},

				/**
				 * Called when the user taps on the clear icon in the search field.
				 * It simply removes the filter form the store
				 */
				onSearchClearIconTap: function() {
					//call the clearFilter method on the store instance
					this.getStore().clearFilter();
				}
	
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
				name: 'address_1',
				label: 'Address 1',
				placeHolder: '123 Street'
			},
			{
				xtype: 'textfield',
				name: 'address_2',
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
				name: 'phone',
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
				name: 'practice_name',
				label: 'Name of Practice',
				placeHolder: 'Required',
				id: 'practice-name-required',
				required: true,
				listeners: {
					keyup: function(e, eOpts){
						var form = Ext.getCmp('add-new-practice-form'),
							formValues = form.getValues();						
						if(formValues.practice_name.length>0){
							Ext.get('practice-name-required').removeCls('warning')
						}
					}				
				}
			},
			{
				xtype: 'textfield',
				name: 'address_1',
				label: 'Address 1',
				placeHolder: '123 Street'
			},
			{
				xtype: 'textfield',
				name: 'address_2',
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
				store: 'usstates',
				cls: 'aoa-popup-list'
			},
			{
				xtype: 'textfield',
				name: 'zip',
				label: 'Zip Code',
				placeHolder: '12345'
			},
			{
				xtype: 'textfield',
				name: 'phone',
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