Ext.define('aoatheme.view.modals.selectdoctor', {
    extend: 'Ext.Panel',
    xtype: 'selectdoctor',
	id: 'selectdoctor-modal',
    config: {
		modal: true,
		cls: 'aoa-modal-bg-none',
		hideOnMaskTap: false,
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
							aoa.modals.selectDoctor.hide();
						}													
					},
					{
						xtype: 'spacer'
					},
					{
						iconCls: 'add',
						iconMask: true, 
						cls: 'aoa-add-btn',
						handler: function(){
							aoa.refs.addDoctorRequestedBy = 'assessment';
							aoa.modals.selectDoctor.hide();
							if (aoa.modals.newdoctor == null){
								aoa.modals.newdoctor = Ext.Viewport.add({xtype:'newdoctor'});
							}
							aoa.modals.newdoctor.show();
						}
					}
				]

			},
			{
				title: 'Doctors List',
				cls: 'aoa-plain-list',
				store: 'doctors',				
				grouped: false,
				height: 390,
				pinHeaders: false,				
				xtype: 'list',
				emptyText: '<div style="margin-top: 20px; text-align: center">No Matching Items</div>',
				itemTpl: [
					'<div class="aoa-bold-17">{firstName} {lastName}</div>'
				].join(''),
				scope: this,
				listeners: {
					itemtap: function(dataview, ix, item, record, event, options){
						var assmStore = aoa.st.asm;
						assmStore.load();
						var rec = assmStore.getById(aoa.refs.activeAssessment);
						rec.set('doctorID',record.data.id);
						rec.set('doctorName',record.data.firstName + ' ' + record.data.lastName);
						aoa.modals.selectDoctor.hide();
						assmStore.sync();
						var domElm = document.getElementById(aoa.refs.activeAssessment);
						domElm.innerHTML = '' + record.data.firstName + ' ' + record.data.lastName + '';
					}
				}
			}											
		],
		scrollable: null
    }
});