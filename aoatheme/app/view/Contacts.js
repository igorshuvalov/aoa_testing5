Ext.define('aoatheme.view.Contacts', {
    extend: 'Ext.List',
    xtype: 'contacts',

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
							width: 237			
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
				store: 'Contacts',				
				grouped: true,
				height: 600,
				pinHeaders: false,				
				xtype: 'list',
				emptyText: '<div style="margin-top: 20px; text-align: center">No Matching Items</div>',
				itemTpl: [
					'{firstName} {lastName}'
				].join('')							

	
			}
		]
    }
});
