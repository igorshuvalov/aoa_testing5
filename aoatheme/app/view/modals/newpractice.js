Ext.define('aoatheme.view.modals.newpractice', {
    extend: 'Ext.Panel',
    xtype: 'newpractice',
	id: 'newpractice-modal',
    config: {
		modal: true,
		cls: 'aoa-modal-bg-none',
		hideOnMaskTap: false,
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
							var form = Ext.getCmp('add-new-practice-form');
							form.reset();
							aoa.modals.newpractice.hide();
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
							if(formValues.practice_name.length == 0){
								Ext.get('practice-name-required').addCls('warning')
							}else{
								var store = Ext.getStore('newPractice');
								store.load();
								if(aoa.refs.addFormMode == 'insert'){
									var added = store.add(formValues);
									store.sync();
									var practiceID = added[0].id;
									var dStore = Ext.getStore('doctors');
									var associatedDoctors = aoa.refs.practiceDoctorsTemp;
									dStore.load();
									for(i=0;i<associatedDoctors.length;i++){
										var rec = dStore.getById(associatedDoctors[i]);
										rec.set('practice_id',practiceID);
									}
									dStore.sync();
									aoa.refs.practiceDoctorsTemp = [];								
								}else
								if(aoa.refs.addFormMode == 'update'){
									var rec = store.getById(aoa.refs.activePractice);
									rec.set('practice_name',formValues.practice_name);
									rec.set('address_1',formValues.address_1);
									rec.set('address_2',formValues.address_2);
									rec.set('city',formValues.city);
									rec.set('state',formValues.state);
									rec.set('zip',formValues.zip);
									rec.set('phone',formValues.phone);
									rec.set('email',formValues.email);									
									store.sync();
								}
								aoa.modals.newpractice.hide();
								aoa.refs.addFormMode = 'insert';
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
									aoa.modals.newpractice.hide();
									aoa.refs.addDoctorRequestedBy = 'newpractice';
									if(aoa.modals.newdoctor == null){
										aoa.modals.newdoctor = Ext.Viewport.add({xtype: 'newdoctor'});
									}
									aoa.modals.newdoctor.show();																
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
    }
});