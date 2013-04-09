Ext.define('aoatheme.view.modals.newdoctor', {
    extend: 'Ext.Panel',
    xtype: 'newdoctor',
	id: 'newdoctor-modal',
    config: {
		modal: true,
		cls: 'aoa-modal-bg-none',
		hideOnMaskTap: false,
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
							aoa.modals.newdoctor.hide();
							if(aoa.refs.addDoctorRequestedBy == 'newpractice'){
								aoa.modals.newPractice.show();
							}else
							if(aoa.refs.addDoctorRequestedBy == 'oldpractice'){
								aoa.modals.associated_doctors.show();
							}else
							if(aoa.refs.addDoctorRequestedBy == 'assessment'){
								aoa.modals.selectDoctor.show();
							}							
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
								var store = Ext.getStore('doctors')
								store.load();
								
								if(aoa.refs.addFormMode == 'insert'){
									if(aoa.refs.addDoctorRequestedBy == 'newpractice'){
										aoa.modals.newPractice.show();
									}else{
										var practiceID = aoa.refs.activePractice;
										formValues.practice_id = practiceID;							
									}
									var added = store.add(formValues);
									aoa.refs.practiceDoctorsTemp.push(added[0].id);
									store.sync();
									if(aoa.refs.addDoctorRequestedBy == 'oldpractice'){
										aoa.modals.associated_doctors.show();
									}else
									if(aoa.refs.addDoctorRequestedBy == 'assessment'){
										aoa.modals.selectDoctor.show();
									}								
								}else
								if(aoa.refs.addFormMode == 'update'){
									var rec = store.getById(aoa.refs.activeDoctor);
									rec.set('firstName',formValues.firstName);
									rec.set('lastName',formValues.lastName);
									rec.set('address_1',formValues.address_1);
									rec.set('address_2',formValues.address_2);
									rec.set('city',formValues.city);
									rec.set('state',formValues.state);
									rec.set('zip',formValues.zip);
									rec.set('phone',formValues.phone);
									rec.set('email',formValues.email);
									store.sync();
								}
								aoa.refs.addFormMode = 'insert';
								aoa.modals.newdoctor.hide();								
								form.reset();
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
										var store = Ext.getStore('doctors')
										store.load();			
										var added = store.add(formValues);
										store.sync();																
										aoa.modals.newdoctor.hide();
										aoa.modals.newPractice.show();
										form.reset()
										aoa.refs.practiceDoctorsTemp.push(added[0].id)
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
						items: aoa.forms.newdoctor
					}
				]																					
			}
		],
		scrollable: null
    }
});