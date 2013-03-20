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
							
							{ text: 'By Account', pressed: true , cls: 'aoa-left-panel-toggle'}, // on
							{ text: 'By Surgeon', cls: 'aoa-left-panel-toggle' },										
						]
					},
					{ xtype: 'spacer' }
				]
			},
			{
				title: 'Address Book',
				cls: 'x-contacts',
				store: 'Contacts',
				height: 300,
				grouped: true,
				pinHeaders: false,
				xtype: 'list',
				emptyText: '<div style="margin-top: 20px; text-align: center">No Matching Items</div>',
				itemTpl: [
					'<div class="headshot" style="background-image:url(resources/images/headshots/{headshot});"></div>',
					'{firstName} {lastName}',
					'<span>{title}</span>'
				].join('')							

	
			}
		]
    }
});
