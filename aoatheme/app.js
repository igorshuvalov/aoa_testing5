Ext.application({
    name: 'aoatheme',

    requires: [
        'Ext.MessageBox'
    ],

    views: [
		// pages
		'Main','assessmentedit','mainpanels',
		'practices','assmresults','recommendations',
		// modals
		'modals.notes','modals.welcome',
		'modals.feedback','modals.associated_doctors',
		'modals.selectdoctor','modals.newdoctor',
		'modals.newpractice',
		// questions
		'qsections.clinicalsuccess', /* section */
		'qset.bq1','qset.bq2','qset.bq3','qset.bq4',
		'qset.iq1','qset.iq2','qset.iq3',
		'qset.poq1','qset.poq2','qset.poq3',
		'qsections.lifestyleassm', /* section */
		'qset.pqq1','qset.pqq2','qset.pqq3','qset.pqq4',
		'qset.psq1','qset.psq2','qset.psq3',
		'qsections.stafftraining', /* section */
		'qset.stq1','qset.stq2','qset.stq3',
		'qset.stq4','qset.stq5','qset.stq6',
		'qset.stq7',
		'qsections.patientexperience', /* section */
		'qset.peq1','qset.peq2','qset.peq3','qset.peq4',
		'qset.pjq1','qset.pjq2','qset.pjq3',
		'qset.pjq4','qset.pjq5','qset.pjq6',
		'qsections.lensrecommendation', /* section */
		'qset.lrq1','qset.lrq2','qset.lrq3',
		'qset.lrq4','qset.lrq5','qset.lrq6',
		'qset.lrq7'
	],
	stores: [
		'assessments','doctors','usstates',
		'practices','notes','qset'
	],
	models: [
		'assessments','practices','usstates',
		'doctors','notes','qset'
	],
	constrollers: ['Application'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
		aoa.st = { // stores
			pr: Ext.getStore('practices'),
			dct: Ext.getStore('doctors'),
			asm: Ext.getStore('assessments'),
			qset: Ext.getStore('qset')
		};
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('aoatheme.view.Main'));
		//Ext.Viewport.add({xtype:'welcome'});
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});


/*
aoa.st.pr
aoa.st.dct
aoa.st.asm
aoa.st.qset
*/

var aoa = {
	emptyQset: function(){
		var emptyRec={bq1:'','bq1-notes':'',bq2:'',bq3:'','bq3-notes':'',bq4:'',iq1:'',iq2:'',iq3:'',poq1:'','poq1-notes':'',poq2:'',poq3:'',pqq1:'',pqq2:'',pqq3:'',pqq4:'',psq1:'','psq1-notes':'',psq2:'',psq3:'',stq1:'','stq1-notes':'',stq2:'',stq3:'',stq4:'',stq5:'',stq6:'',stq7:'',peq1:'','peq1-notes':'',peq2:'',peq3:'',peq4:'',pjq1:'',pjq2:'',pjq3:'',pjq4:'','pjq4-notes':'',pjq5:'',pjq6:'',lrq1:'',lrq2:'',lrq3:'','lrq3-notes':'',lrq4:'',lrq5:'',lrq6:'',lrq7:''};
		return emptyRec
	},
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
		activeQset: null,
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