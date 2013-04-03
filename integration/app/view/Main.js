Ext.define('aoa.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: [
					{
						docked: 'top',
						xtype: 'titlebar',
						title: 'Account Opportunity Analysis',
						cls: 'aoa-titlebar1',
						items: [
							{
								text: 'Feedback' , align: 'right',
								cls: 'aoa-titlebar1-right-btn',
								ui: 'small',
								handler: function() {
									Ext.Viewport.setActiveItem({xtype:'assessmentedit'});
									return false
									if (!this.overlay) {
										this.overlay = Ext.Viewport.add({
											xtype: 'panel',
											modal: true,
											cls: 'aoa-modal-bg',
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
											height: 250,
											width: 350,
											styleHtmlContent: true,										
											html: '<p>Use this application to assess multifocal potential within a clinic after observing 1-2 days of practices, from initial consultation to post-op evaluation.</p>',
											items: [
												{
													docked: 'top',
													xtype: 'toolbar',
													title: 'Welcome',
													cls: 'aoa-modal-toolbar'
												},
												{
													docked: 'bottom',
													xtype: 'toolbar',
													cls: 'aoa-modal-toolbar',
													items: [
														{
															xtype: 'spacer'
														},
														{
															scope: this,
															cls: 'aoa-modal-btn1',
															ui: 'small',
															text: 'Get Started',
															handler: function() {
																this.overlay.hide();
																//Ext.Viewport.setActiveItem({xtype:'assessmentedit'});
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
				],
                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")
            },
			{
				xtype: 'mainpanels'
			}
        ]
    }
});
