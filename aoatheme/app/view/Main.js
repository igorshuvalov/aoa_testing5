Ext.define('aoatheme.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
	id: 'main',
    requires: [
        'Ext.TitleBar'
    ],
	initialize: function(){
		this.showAnimation = 'slideIn';
		this.setActiveItem(0);
	},
    config: {
        tabBarPosition: 'bottom',
		layout: 'card',
        items: [
			{
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
										id: 'feedbackBtn',
										handler: function() {
											if(aoa.modals.feedback == null){
												aoa.modals.feedback = Ext.Viewport.add({xtype: 'feedback'});
											}else{
												aoa.modals.feedback.show()
											}
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
			},			
			{xtype: 'assessmentedit'},
			{xtype:	'assmresults'},
			{xtype:'recommendations'}
        ]
    }
});
