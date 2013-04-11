Ext.define('aoatheme.view.qsections.stafftraining', {
    extend: 'Ext.Container',
    xtype: 'stafftraining',

    config: {
        title: 'stafftraining',
		items: [
			{
				cls: 'assm-divider',
				html: '<div class="assm-h1">Staff Training</div>'
			},
			{
				html: '<hr class="hr-divider wide"/>'
			},						
			/* Staff Training */

			/* question 1 */
			{
				cls: 'assm-divider',
				layout: 'hbox',
				items: [
					{
						cls: 'assm-left-panel',
						flex: 1.7,
						layout: 'vbox',
						items:[
							{
								cls: 'assm-qheader',
								html: 'Question 1'
							},
							{
								cls: 'assm-qtext',
								html: 'What materials are available to educate staff about presbyopia correcting lens options? (Select all that apply)'
							}
							
						]
					},
					{xtype: 'stq1'}
				]
			},
			{
				html: '<hr class="hr-divider"/>'
			},
			/* question 2 */
			{
				cls: 'assm-divider',
				layout: 'hbox',
				items: [
					{
						cls: 'assm-left-panel',
						flex: 1.7,
						layout: 'vbox',
						items:[
							{
								cls: 'assm-qheader',
								html: 'Question 2'
							},
							{
								cls: 'assm-qtext',
								html: 'How consistently is staff trained using the items above?'											
							}
							
						]										
					},
					{xtype: 'stq2'}
				]
			},
			{
				html: '<hr class="hr-divider"/>'
			},
			/* question 3 */
			{
				cls: 'assm-divider',
				layout: 'hbox',
				items: [
					{
						cls: 'assm-left-panel',
						flex: 1.7,
						layout: 'vbox',
						items:[
							{
								cls: 'assm-qheader',
								html: 'Question 3'
							},
							{
								cls: 'assm-qtext',
								html: 'How often does staff use their knowledge to educate patients on lens options?'
							}
							
						]
					},
					{xtype: 'stq3'}
				]
			},
			{
				html: '<hr class="hr-divider"/>'
			},
			/* question 4 */
			{
				cls: 'assm-divider',
				layout: 'hbox',
				items: [
					{
						cls: 'assm-left-panel',
						flex: 1.7,
						layout: 'vbox',
						items:[
							{
								cls: 'assm-qheader',
								html: 'Question 4'
							},
							{
								cls: 'assm-qtext',
								html: 'How specific are the goals assigned to the staff for multifocal education?'
							}
							
						]
					},
					{xtype: 'stq4'}
				]
			},
			{
				html: '<hr class="hr-divider"/>'
			},
			/* question 5 */
			{
				cls: 'assm-divider',
				layout: 'hbox',
				items: [
					{
						cls: 'assm-left-panel',
						flex: 1.7,
						layout: 'vbox',
						items:[
							{
								cls: 'assm-qheader',
								html: 'Question 5'
							},
							{
								cls: 'assm-qtext',
								html: 'How incentivized is the staff to educate patients about multifocals?'
							}
							
						]
					},
					{xtype: 'stq5'}
				]
			},
			{
				html: '<hr class="hr-divider"/>'
			},
			/* question 6 */
			{
				cls: 'assm-divider',
				layout: 'hbox',
				items: [
					{
						cls: 'assm-left-panel',
						flex: 1.7,
						layout: 'vbox',
						items:[
							{
								cls: 'assm-qheader',
								html: 'Question 6'
							},
							{
								cls: 'assm-qtext',
								html: 'How effective is the staff at communicating the benefits of multifocals as opposed to only describing what the lenses are?'
							}
							
						]										
					},
					{xtype: 'stq6'}
				]
			},
			{
				html: '<hr class="hr-divider"/>'
			},
			/* question 7 */
			{
				cls: 'assm-divider',
				layout: 'hbox',
				items: [
					{
						cls: 'assm-left-panel',
						flex: 1.7,
						layout: 'vbox',
						items:[
							{
								cls: 'assm-qheader',
								html: 'Question 7'
							},
							{
								cls: 'assm-qtext',
								html: 'Overall, how consistently does the account as a whole communicate multifocal information to patients?'
							}
							
						]
					},
					{xtype: 'stq7'}
				]
			}
		]
    }
});