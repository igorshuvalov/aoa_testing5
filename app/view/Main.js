Ext.define('testing.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
	requires: [
		'Ext.TitleBar'
	],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                styleHtmlContent: true,
                scrollable: true,

                items: [
				{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Application name',
					items: [
						{
							text: 'Feedback',
							align: 'right',
							handler: function() {
								if (!this.overlay) {
									this.overlay = Ext.Viewport.add({
										xtype: 'panel',
										modal: true,
										hideOnMaskTap: false,
										showAnimation: {
											type: 'popIn',
											duration: 250,
											easing: 'ease-out'
										},
										hideAnimation: {
											type: 'popOut',
											duration: 250,
											easing: 'ease-out'
										},
										centered: true,
										width: Ext.os.deviceType == 'Phone' ? 260 : 400,
										height: Ext.os.deviceType == 'Phone' ? 220 : 400,
										styleHtmlContent: true,
										html: '<p>This is a modal, centered and floating panel. hideOnMaskTap is true by default so ' +
											'we can tap anywhere outside the overlay to hide it.</p>',
										items: [
											{
												docked: 'top',
												xtype: 'toolbar',
												title: 'Welcome Message'
											},
											{
												docked: 'bottom',
												xtype: 'toolbar',
												items: [
													{
														xtype: 'spacer'
													},
													{
														scope: this,
														text: 'Open New page',
														handler: function() {
															this.overlay.hide();	
															var sidebar = Ext.create('testing.view.sidebar');											
															Ext.Viewport.add(sidebar);
															sidebar.show()
															console.log(Ext.Viewport.getActiveItem().getId())
														}
													}
												]
											}											
										],
										scrollable: true
									});
								}

								this.overlay.show();
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
    }
});
