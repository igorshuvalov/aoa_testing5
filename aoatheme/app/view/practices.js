Ext.define('aoatheme.view.practices', {
    extend: 'Ext.List',
    xtype: 'practices',
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
							if (aoa.modals.newpractice == null) {
								aoa.modals.newpractice = Ext.Viewport.add({xtype: 'newpractice'});
							}							
							aoa.modals.newpractice.show()								
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
							id: 'practice-search-field',
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
							
							{
								text: 'By Account',
								pressed: true,
								cls: 'aoa-left-panel-toggle',
								ui: 'normal',
								handler: function(){
									aoa.refs.practiceQueryMode = 'practiceID';
									var leftList = Ext.getCmp('practice-list');
									leftList.setItemTpl('<div class="aoa-normal-20">{practice_name}</div>' + aoa.tmpl.remove + '')
									leftList.setStore('newPractice');
									var searchField = Ext.getCmp('practice-search-field');
									searchField.fireEvent('keyup');
								}
							}, // on
							{
								text: 'By Surgeon',
								cls: 'aoa-left-panel-toggle',
								ui: 'normal',
								handler: function(){
									Ext.getCmp('aoa-view-surgeons').hide();
									aoa.refs.practiceQueryMode = 'doctorID';
									var leftList = Ext.getCmp('practice-list');
									leftList.setItemTpl('<div class="aoa-normal-20">{firstName} {lastName}</div>' + aoa.tmpl.remove + '')
									leftList.setStore('doctors');
									var searchField = Ext.getCmp('practice-search-field');
								}
							},
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
				scope: this,				
				listeners: {
					itemswipe: function(dataview, ix, item, record, event, options) {
						if (event.direction == "left") {											
							var deleteElm = Ext.get('rem-'+record.data.id+'');
							deleteElm.addCls('ready-todelete');
							var abortDel = Ext.get('abort-rem-'+record.data.id+'');
							abortDel.on('tap',function(){deleteElm.removeCls('ready-todelete')});
							var confirmRemove = Ext.get('confirm-rem-'+record.data.id+'');
							confirmRemove.on('tap',function(){	
								Ext.Anim.run(item, 'fade', {
									after: function() {
										var st = Ext.getStore('newPractice');
										st.remove(record);
										st.sync();
									},
									out: true
								});	
							});
						}
					},
					itemtap: function(elm, index, target, record, e, eOpts){
						if(aoa.refs.practiceQueryMode == 'practiceID'){
							aoa.refs.activePractice = record.data.id;
							Ext.getCmp('aoa-view-surgeons').show();
						}else{
							aoa.refs.activeDoctor = record.data.id;
							Ext.getCmp('aoa-view-surgeons').hide();
						}
						var assmStore = Ext.getStore('assessments');
						assmStore.load();
						assmStore.clearFilter();
						assmStore.filter(aoa.refs.practiceQueryMode, record.data.id);
						Ext.getCmp('assessment-list').refresh();
						var addr = record.data,
							mainRightView = Ext.getCmp('main-right-view'),
							feedbackBtn = Ext.getCmp('feedbackBtn'),
							practiceAddress = Ext.getDom('practice-address'),
							addressHTML = '<div class="aoa-right-panel-top-text"><ul>';
						if(this.getStore().getStoreId() == 'newPractice'){
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
						practiceAddress.innerHTML = addressHTML;
						mainRightView.setStyle({visibility: 'visible'});						
						feedbackBtn.setStyle({visibility: 'visible'});						
					}
				},
				itemTpl: aoa.tmpl.practiceItem,
				onSearchKeyUp: function(field) {
					var value = field,
						store = this.getStore();
					if(this.getStore().getStoreId() == 'newPractice'){
						var hName = 'practice';
					}else{
						var hName = 'doctors';
					}
					store.clearFilter();
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
								var search = regexps[i];
								if(hName == 'practice'){
									var didMatch = record.get('practice_name').match(search);
								}else{
									var didMatch = record.get('firstName').match(search) || record.get('lastName').match(search);
								}
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
				}
	
			}
		]
    }
});	