Ext.define('aoatheme.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
	id: 'main',
    requires: [
        'Ext.TitleBar'
    ],
	initialize: function(){
		this.showAnimation = 'slideIn';
		this.setActiveItem(0);
		aoa.st = { // stores
			pr: Ext.getStore('newPractice'),
			dct: Ext.getStore('doctors'),
			asm: Ext.getStore('assessments')
		};
	},
    config: {
        tabBarPosition: 'bottom',
		layout: 'card',
        items: [
			{
				items: [
					{
						title: 'Welcome',
						iconCls: 'home',

						styleHtmlContent: true,
						scrollable: true,

						items: [
							{
								docked: 'top',
								xtype: 'titlebar',
								title: 'Account Opportunity Analysis',
								cls: 'aoa-titlebar1',
								items: [
									{
										text: 'Feedback' , align: 'right',
										cls: 'aoa-titlebar1-right-btn',
										ui: 'small',
										id: 'feedbackBtn',
										handler: function() {
											if(aoa.modals.feedback == null){
												aoa.modals.feedback = Ext.Viewport.add({xtype: 'feedback'});
											}else{
												aoa.modals.feedback.show()
											}
										}
									}
								]
							}				
						]
					},
					{
						xtype: 'mainpanels'
					}
				]
			},			
			{xtype: 'assessmentedit'},
			{xtype:	'assmresults'},
			{xtype:'recommendations'}
        ]
    }
});


/*
aoa.st.pr
aoa.st.dct
aoa.st.asm
*/

var aoa = {
	tmpl: {
		practiceItem: '<div class="aoa-normal-20">{practice_name}</div><div id="rem-{id}" class="deleteplaceholder"><div class="cancel-delete" id="abort-rem-{id}"></div><div id="confirm-rem-{id}" class="aoa-delete-alignright x-button x-button-decline-small x-layout-box-item x-stretched"><span class="x-button-label">Delete</span></div></div>',
		remove: '<div id="rem-{id}" class="deleteplaceholder"><div class="cancel-delete" id="abort-rem-{id}"></div><div id="confirm-rem-{id}" class="aoa-delete-alignright x-button x-button-decline-small x-layout-box-item x-stretched"><span class="x-button-label">Delete</span></div></div>',
		removeAssmModal: '<div id="rema-{id}" class="deleteplaceholder"><div class="cancel-delete" id="abort-rema-{id}"></div><div id="confirm-rema-{id}" class="aoa-delete-alignright x-button x-button-decline-small x-layout-box-item x-stretched"><span class="x-button-label">Delete</span></div></div>',		
		removeAssmModalB: '<div id="remb-{id}" class="deleteplaceholder"><div class="cancel-delete" id="abort-remb-{id}"></div><div id="confirm-remb-{id}" class="aoa-delete-alignright x-button x-button-decline-small x-layout-box-item x-stretched"><span class="x-button-label">Delete</span></div></div>'
	},
	refs: {
		activePractice: null,		
		activeAssessment: null,
		activeDoctor: null,
		practiceQueryMode: 'practiceID', //doctorID
		practiceDoctorsTemp: [],
		addDoctorRequestedBy: '',
		addFormMode: 'insert', // update
		editItemMode: 'practice' // doctor
	},
	events: {
		deleteItemActive: false
	},
	utils: {
		hasCls: function(a,b){return-1<(' '+a.className+' ').replace(/[\n\t]/g,' ').indexOf(b)?!0:!1}
	},
	forms: {	
		newdoctor: [
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
		newpractice: null,
		newdoctor: null,
		feedback: null,
		notes: null,
		selectDoctor: null, //assign doctor to assessment modal,
		associated_doctors: null
	},
	pages: {
		assessment: null
	}
};