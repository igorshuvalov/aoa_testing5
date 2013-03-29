Ext.define('aoa.view.sidebar', {
    extend: 'Ext.Container',
    xtype: 'sidebar',
	requires: [
		'Ext.TitleBar'
	],
    config: {
        title: 'Edit',
        layout: 'fit',
		iconCls: 'home',

        items: [
            {
                title: 'Sidebar',
                styleHtmlContent: true,
                scrollable: true,					
                items: [
					{
						docked: 'top',
						xtype: 'titlebar',
						title: 'Page Name',
						items: [
							{
								text: 'Back',
								ui: 'back',
								align: 'left',
								handler: function() {
									var main = Ext.create('aoa.view.Main');
									Ext.Viewport.add(main);
									main.show()
									Ext.Viewport.getActiveItem().hide()
								}
							}						
						]
					}
				]
				
			}
        ]
    }
});
/*
Ext.define('aoa.view.sidebar', {
    extend: 'Ext.tab.Panel',
    xtype: 'sidebar',
    requires: [
        'Ext.Toolbar',
		'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'top',
        items: [
            {
                title: 'Application Name',
                styleHtmlContent: true,
                scrollable: true,					
                items: {
                    docked: 'top',
					xtype: 'titlebar',
					title: 'Application Name 2',
					items:[
						{
							text: 'Feedback 2' , align: 'right',
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
														text: 'Close',
														handler: function() {
															this.overlay.hide();													
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
                },

                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")
            }
        ]
    }
});*/
