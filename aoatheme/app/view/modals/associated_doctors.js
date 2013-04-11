Ext.define('aoatheme.view.modals.associated_doctors', {
    extend: 'Ext.Panel',
    xtype: 'associated_doctors',
	id: 'associated_doctors-modal',
    config: {
		modal: true,
		cls: 'aoa-modal-bg-none notes',
		hideOnMaskTap: false,
		centered: true,
		height: 464,
		width: 865,
		styleHtmlContent: true,
		hidden: true,
		items: [
			{
				docked: 'top',
				xtype: 'toolbar',
				title: 'Doctors',
				cls: 'aoa-modal-toolbar-type-b',
				id: 'associated_doctors_modal_title',
				items: [
					{
						scope: this,
						cls: 'aoa-modal-btn1',
						text: 'Cancel',
						handler: function() {
							var doctorDetails = Ext.getDom('assocdct_right_panel'),
								mainRightView = Ext.getCmp('assocdct_right_panel_assm');								
							doctorDetails.style.visibility = 'hidden';
							mainRightView.setStyle({visibility: 'hidden'});
							Ext.getCmp('associated_doctors-toolbar').deselectAll();
							aoa.modals.associated_doctors.hide();
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
							aoa.modals.associated_doctors.hide();
						}													
					}
				]

			},
			{
				layout: 'hbox',
				items: [
					{
						flex: 1,
						cls: 'aoa-notes-leftpanel-bg',
						height: 406,
						scrollable: null,
						items: [
							{
								xtype: 'toolbar',
								docked: 'top',
								cls: 'aoa-list-search-toolbar notes',
								height: 65,
								items: [
									{xtype: 'spacer'},
									{
										xtype: 'searchfield',
										placeHolder: 'Search...',
										scope: this,
										width: 237,
										height: 29,
										listeners: {								
											clearicontap: function(){
												var list = Ext.getCmp('associated_doctors-toolbar');
												list.onSearchClearIconTap()									
											},
											keyup: function(){
												var val = this.getValue();
												var list = Ext.getCmp('associated_doctors-toolbar');
												list.onSearchKeyUp(val)
											}
										}									
									},
									{
										iconCls: 'add',
										iconMask: true, 
										cls: 'aoa-add-btn add-type-a',
										handler: function(){
											aoa.modals.associated_doctors.hide();
											aoa.refs.addDoctorRequestedBy = 'oldpractice';
											if (aoa.modals.newdoctor == null){
												aoa.modals.newdoctor = Ext.Viewport.add({xtype:'newdoctor'});
											}
											aoa.modals.newdoctor.show()
										}
									},
									{xtype: 'spacer'}
								]								
							},
							{
								title: 'Doctors',
								store: 'doctors',				
								grouped: false,
								height: 340,
								pinHeaders: false,
								id: 'associated_doctors-toolbar',
								xtype: 'list',
								cls: 'aoa-right-panel-list',
								onItemDisclosure: function(){
									
								},
								listeners: {
									itemswipe: function(dataview, ix, item, record, event, options) {
										if (event.direction == "left") {											
											var deleteElm = Ext.get('rema-'+record.data.id+'');
											deleteElm.addCls('ready-todelete');
											var abortDel = Ext.get('abort-rema-'+record.data.id+'');
											abortDel.on('tap',function(){deleteElm.removeCls('ready-todelete')});
											var confirmRemove = Ext.get('confirm-rema-'+record.data.id+'');
											confirmRemove.on('tap',function(){	
												Ext.Anim.run(item, 'fade', {
													after: function() {
														var st = aoa.st.pr;
														st.remove(record);
														st.sync();
													},
													out: true
												});	
											});
										}
									},
									itemtap: function(elm, index, target, record, e, eOpts){
										var assmStore = aoa.st.asm;
										assmStore.clearFilter(true);
										assmStore.load();
										assmStore.filter('doctorID', record.data.id);
										Ext.getCmp('asscdct-right-list').refresh();
										var addr = record.data,
											doctorDetails = Ext.getDom('assocdct_right_panel'),
											mainRightView = Ext.getCmp('assocdct_right_panel_assm'),
											addressHTML = '<div class="aoa-right-panel-top-text"><ul>';
										if(this.getStore().getStoreId() == 'practices'){
											var hName = addr.practice_name;
										}else{
											var hName = addr.firstName + ' ' + addr.lastName;
										}
										addressHTML += '<li class="aoa-group-header">'+hName+'</li>';
										if(addr.address_1 && addr.address_1.length>1){
											addressHTML += '<li class="aoa-group-item">'+addr.address_1+'</li>';
										}
										if(addr.address_2 && addr.address_2.length>1){
											addressHTML += '<li class="aoa-group-item">'+addr.address_2+'</li>';
										}						
										if(addr.city && addr.city.length>1){
											addressHTML += '<li class="aoa-group-item">'+addr.city+'</li>';
										}							
										if(addr.state && addr.city.length>1){
											addressHTML += '<li class="aoa-group-item">'+addr.state+'</li>';
										}							
										if(addr.zip && addr.city.length>1){
											addressHTML += '<li class="aoa-group-item">'+addr.zip+'</li>';
										}	
										if(addr.phone && addr.city.length>1){
											addressHTML += '<li class="aoa-group-item">'+addr.phone+'</li>';
										}	
										if(addr.email && addr.city.length>1){
											addressHTML += '<li class="aoa-group-item">'+addr.email+'</li>';
										}
										addressHTML += '</ul></div>';
										doctorDetails.innerHTML = addressHTML;
										doctorDetails.style.visibility = 'visible';
										mainRightView.setStyle({visibility: 'visible'});	
									}
								},
								itemTpl: '<div class="aoa-normal-20">{firstName} {lastName}</div>' + aoa.tmpl.removeAssmModal + '',
								onSearchKeyUp: function(field) {
									var value = field,
										store = this.getStore();
									store.clearFilter();
									store.filter('practice_id',aoa.refs.activePractice)
									if (value) {
										var searches = value.split(' '),
											regexps = [],
											i;
										for (i = 0; i < searches.length; i++) {
											if (!searches[i]) continue;
											regexps.push(new RegExp(searches[i], 'i'));
										}
										store.filter(function(record) {
											var matched = [];
											for (i = 0; i < regexps.length; i++) {
												var search = regexps[i],
													didMatch = record.get('firstName').match(search) || record.get('lastName').match(search);
												matched.push(didMatch);
											}
											if (regexps.length > 1 && matched.indexOf(false) != -1) {
												return false;
											} else {
												return matched[0];
											}
										});
									}
								},
								onSearchClearIconTap: function() {
									this.getStore().clearFilter();
									this.getStore().filter('practice_id',aoa.refs.activePractice)
								}
							}
						]
					},
					{
						flex: 1.7,
						layout: 'vbox',
						items: [
							{
								id: 'assocdct_right_panel',
								flex: 1.27
							},
							{
								layout:'vbox',
								flex: 1,
								id: 'assocdct_right_panel_assm',
								items: [
									{html:'<hr class="hr-divider" />'},
									{
										html: '<h4 class="assm">Assessments</h4>'
									},
									{																				
										title: 'Doctor Details',
										store: 'assessments',				
										grouped: false,
										height: 98,
										pinHeaders: false,				
										xtype: 'list',
										id: 'asscdct-right-list',
										cls: 'aoa-right-panel-list asscdct-right-list',
										onItemDisclosure: function(record){
											aoa.modals.associated_doctors.hide();
											aoa.refs.activeAssessment = record.data.id;
											Ext.getCmp('main').setActiveItem(1);											
										},
										listeners: {
											itemswipe: function(dataview, ix, item, record, event, options) {
												if (event.direction == "left") {											
													var deleteElm = Ext.get('remb-'+record.data.id+'');
													deleteElm.addCls('ready-todelete');
													var abortDel = Ext.get('abort-remb-'+record.data.id+'');
													abortDel.on('tap',function(){deleteElm.removeCls('ready-todelete')});
													var confirmRemove = Ext.get('confirm-remb-'+record.data.id+'');
													confirmRemove.on('tap',function(){	
														Ext.Anim.run(item, 'fade', {
															after: function() {
																var st = aoa.st.pr;
																st.remove(record);
																st.sync();
															},
															out: true
														});	
													});
												}
											}
										},
										itemTpl:
											'<div class="asscdct-assm">'+
											'	<ul class="details">'+
											'		<li style="width:25%"><span class="aoa-bold-17">{regDate}</span></li>'+
											'		<li><span class="aoa-normal-17">{status}</span></li>'+
											'	</ul>'+
											aoa.tmpl.removeAssmModalB +
											'</div>'
									}
								]								
							}
						]
					}
				]
			}
		],
		scrollable: null
    }
});