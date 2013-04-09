Ext.define('aoatheme.view.modals.notes', {
    extend: 'Ext.Panel',
    xtype: 'notes',
	id: 'notes-modal',
    config: {
		modal: true,
		cls: 'aoa-modal-bg-none notes',
		hideOnMaskTap: false,
		centered: true,
		height: 680,
		width: 950,
		styleHtmlContent: true,	
		items: [
			{
				docked: 'top',
				xtype: 'toolbar',
				title: 'Notes',
				cls: 'aoa-modal-toolbar-type-b',										
				items: [
					{
						scope: this,
						cls: 'aoa-modal-btn1',
						text: 'Cancel',
						handler: function() {
							var thisModal = Ext.getCmp('notes-modal');
							thisModal.hide();
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
							var thisModal = Ext.getCmp('notes-modal');
							thisModal.hide();
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
						height: 623,
						scrollable: null,
						items: [
							{
								xtype: 'toolbar',
								docked: 'top',
								cls: 'aoa-list-search-toolbar notes',
								height: 60,
								items: [
									{xtype: 'spacer'},
									{
										xtype: 'searchfield',
										placeHolder: 'Search...',
										scope: this,
										listeners: {								
											clearicontap: function(){
												var list = Ext.getCmp('notes-searchlist');
												list.onSearchClearIconTap()									
											},
											keyup: function(){
												var val = this.getValue();
												var list = Ext.getCmp('notes-searchlist');
												list.onSearchKeyUp(val)
											}
										}	
									
									},
									{ xtype: 'spacer' }					
								]
								
							},
							{
								title: 'Notes',
								store: 'notes',				
								grouped: false,
								height: 565,
								pinHeaders: false,
								id: 'notes-searchlist',
								xtype: 'list',
								cls: 'aoa-right-panel-list notes',
								emptyText: '<div style="margin-top: 20px; text-align: center">No Matching Items</div>',
								itemTpl: [
									'<div class="aoa-notes-listh3">{itemTitle}</div><div class="aoa-notes-listp">{description}</div>'
								].join(''),
								onItemDisclosure: function(){

								},
								onSearchKeyUp: function(field) {
									var value = field,
										store = this.getStore();
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
												var search = regexps[i],
													didMatch = record.get('description').match(search) || record.get('itemTitle').match(search);
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
					},
					{
						flex: 1.7,
						items: [
							{
								title: 'Notes',
								store: 'notes',				
								grouped: false,
								height: 600,
								pinHeaders: false,				
								xtype: 'list',
								cls: 'aoa-notes-right-list',
								emptyText: '<div style="margin-top: 20px; text-align: center">No Matching Items</div>',
								itemTpl: [
									'<div class="aoa-notes-listh3">{itemTitle}</div><div class="aoa-notes-listp">{description}</div>'
								].join('')
							}
						]
					}
				]
			}
		],
		scrollable: null
    }
});