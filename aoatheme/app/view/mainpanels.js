Ext.define('aoatheme.view.mainpanels', {
    extend: 'Ext.Panel',
    xtype: 'mainpanels',
	requires: [
		'Ext.TitleBar','Ext.field.Search','Ext.SegmentedButton'
	],
    config: {
        layout: 'hbox',
		height: '100%',
		items: [
			{
				xtype: 'panel',
				flex: 1,				
				cls: 'aoa-left-panel-bg',
				layout: 'fit',
				items: [
					{
						xtype: 'contacts'
					}
				]
			},
			{
				xtype: 'panel',
				cls: 'aoa-right-panel',
				flex: 2,
				layout: 'vbox',
				items: [
					{
						xtype: 'panel',
						flex: 1,
						layout: 'hbox',
						items: [
							{
								xtype: 'panel',
								flex: 2,
								items: [
									{
										html: 
											'<div class="aoa-right-panel-top-text">'+
											'	<ul>'+
											'		<li class="aoa-group-header">South Austin Medical</li>'+
											'		<li class="aoa-group-item">123-123-1234</li>'+
											'		<li class="aoa-group-item">Address Line 1</li>'+
											'		<li class="aoa-group-item">Address Line 2</li>'+
											'		<li class="aoa-group-item">email@domail.com</li>'+
											'	</ul>'+						
											'</div>'
									
									},
									{
										xtype: 'toolbar',
										docked: 'bottom',
										cls: 'aoa-list-search-toolbar',
										items: [											
											{
												ui: 'small',
												cls: 'aoa-btn-default-type-a',
												text: 'View Surgeons'
											},
											{ xtype: 'spacer' }
										]
									}								
								
								]
							},
							{
								xtype: 'panel',
								flex: 1,								
								items: [
									{
										xtype: 'toolbar',
										docked: 'top',
										cls: 'aoa-list-search-toolbar',
										items: [
											{ xtype: 'spacer' },
											{
												ui: 'small',
												cls: 'aoa-btn-default-type-a',
												text: 'Edit'
											}									
										]
									}
								]					
							}							
						]
					},
					{
						xtype: 'panel',
						flex: 2,
						cls: 'aoa-vbox-bottom-panel',
						items: [
							{
								xtype: 'panel',
								layout: 'hbox',
								items: [
									{
										flex: 2,
										html: '<h4>Assessments</h4>'									
									},
										{
											xtype: 'panel',
											flex: 1,								
											items: [
												{
													xtype: 'toolbar',
													docked: 'top',
													cls: 'aoa-list-search-toolbar',
													items: [
														{ xtype: 'spacer' },
														{
															ui: 'small',
															cls: 'aoa-btn-default-type-a',
															text: 'Add'
														}									
													]
												}
											]					
										}									
								]
							},
								{
									height: 138,
									xtype: 'list',
									store: 'Assessments',
									cls: 'aoa-right-panel-list',
									itemTpl: '<div><strong>{regDate}</strong> {status} {name}</div>',
									variableHeights: false
								},
							{
								xtype: 'textareafield',
								placeHolder: 'Notes',
								width: '75%',
								cls: 'aoa-right-panel-textarea'
							}
						
						]
					}					

				]
			}
		]
    }
});