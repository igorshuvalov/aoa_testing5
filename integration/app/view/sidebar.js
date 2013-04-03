Ext.define('aoa.view.sidebar', {
    extend: 'Ext.Container',
    xtype: 'sidebar',
	/*requires: [
		'Ext.TitleBar'
	],	*/
    config: {
        title: 'Edit',
        layout: 'fit',
		iconCls: 'home',
		showAnimation: 'slideIn',
		hideAnimation: 'slideOut',
        items: [
            {
                title: 'Sidebar',
                styleHtmlContent: true,
                scrollable: true,					
                items: [
					{
						docked: 'top',
						xtype: 'titlebar',
						cls: 'aoa-titlebar1',
						title: 'Page Name',
						items: [
							{
								text: 'Back',
								ui: 'back',
								cls: 'aoa-modal-btn1',
								align: 'left',
								handler: function() {
									Ext.Viewport.getActiveItem().hide()
									Ext.Viewport.setActiveItem({xtype:'main'});
								}
							}						
						]
					},
					{
						html: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eros ipsum, lobortis quis interdum non, commodo vitae elit. Aliquam purus nulla, feugiat vitae bibendum eu, laoreet ut metus. Aliquam non ligula nisl, vel commodo neque. Quisque tristique pretium nunc, ac adipiscing nisi blandit quis. Ut pulvinar quam vel nibh euismod vulputate. Proin purus est, porta nec commodo id, interdum sit amet sem. Nulla eros lectus, ullamcorper sit amet dapibus lacinia, eleifend ac dui. Nulla facilisi. Vestibulum ornare lorem non mauris lobortis ac sodales purus dignissim. Curabitur consectetur orci nisi, et dignissim lacus. Aliquam posuere nisl sed lectus ullamcorper iaculis. Nulla euismod nulla nulla, sed tincidunt mauris.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eros ipsum, lobortis quis interdum non, commodo vitae elit. Aliquam purus nulla, feugiat vitae bibendum eu, laoreet ut metus. Aliquam non ligula nisl, vel commodo neque. Quisque tristique pretium nunc, ac adipiscing nisi blandit quis. Ut pulvinar quam vel nibh euismod vulputate. Proin purus est, porta nec commodo id, interdum sit amet sem. Nulla eros lectus, ullamcorper sit amet dapibus lacinia, eleifend ac dui. Nulla facilisi. Vestibulum ornare lorem non mauris lobortis ac sodales purus dignissim. Curabitur consectetur orci nisi, et dignissim lacus. Aliquam posuere nisl sed lectus ullamcorper iaculis. Nulla euismod nulla nulla, sed tincidunt mauris.</p>'
					}
				]
				
			}
        ]
    }
});