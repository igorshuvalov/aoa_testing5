Ext.define('aoatheme.view.Contacts', {
    extend: 'Ext.List',
    xtype: 'contacts',
    requires: [
        'Ext.form.*',
        'Ext.field.*',
        'Ext.Button',
        'Ext.Toolbar',

        'Ext.data.Store',
		'aoatheme.model.PracticeFields'
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
														cls: 'aoa-modal-btn1',
														id: 'save-new-practice',
														handler: function() {
															var form = Ext.getCmp('add-new-practice-form'),
																formValues = form.getValues();
															console.log(formValues)
															if(formValues.practice_name.length == 0){
																// integrate required*
															}else{
																var store = Ext.getStore('newPractice')
																store.load();			
																store.add(formValues);
																store.sync();																
																this.overlay.hide();
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
												//cls: 'aoa-right-panel-list',
												cls: 'aoa-form-panel',
												scrollable: null,
												id: 'add-new-practice-form',
												store: 'newPractice',
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
																id: 'practice_name',
																name: 'practice_name',
																label: 'Name of Practice',
																placeHolder: 'Required',
																required: true
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
															}/*,
															{
																xtype: 'selectfield',
																name: 'rank',
																label: 'Rank',
																valueField: 'rank',
																displayField: 'title',
																store: {
																	data: [
																		{ rank: 'master', title: 'Master'},
																		{ rank: 'padawan', title: 'Student'},
																		{ rank: 'teacher', title: 'Instructor'},
																		{ rank: 'aid', title: 'Assistant'}
																	]
																}
															}*/
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
						{ xtype: 'spacer' }					
					]
				
			},		
			{
                    xtype: 'toolbar',
                    docked: 'top',
					cls: 'aoa-list-search-toolbar',
					items: [
						{ xtype: 'spacer' },
						{xtype: 'searchfield',
						placeHolder: 'Search...'/*,
						listeners: {
							scope: this,
							clearicontap: this.onSearchClearIconTap,
							keyup: this.onSearchKeyUp
						}*/				
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
				title: 'Address Book',
				cls: 'x-contacts',
				store: 'newPractice',				
				grouped: true,
				height: 600,
				pinHeaders: false,				
				xtype: 'list',
				emptyText: '<div style="margin-top: 20px; text-align: center">No Matching Items</div>',
				itemTpl: [
					'<div class="aoa-normal-20">{practice_name}</div>'
				].join('')							

	
			}
		]
    }
});
