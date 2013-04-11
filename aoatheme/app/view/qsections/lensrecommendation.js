Ext.define('aoatheme.view.qsections.lensrecommendation', {
    extend: 'Ext.Container',
    xtype: 'lensrecommendation',

    config: {
        title: 'lensrecommendation',
		items: [
			{
				cls: 'assm-divider',
				html: '<div class="assm-h1">Lens Recommendation</div>'
			},
			{
				html: '<hr class="hr-divider wide"/>'
			},						
			/* Lens Recommendation */

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
								html: 'How would you gauge the surgeon\'s comfort level with explaining different types of lens options to patients?'
							}							
						]
					},
					{xtype: 'lrq1'}
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
								html: 'How clearly does the surgeon make specific a lens recommendation, as opposed to merely presenting lens options?'
							}							
						]										
					},
					{xtype: 'lrq2'}
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
								html: 'What patient-friendly reference materials are used to help explain or support the multifocal recommendation? (Select all that apply)'
							}							
						]
					},
					{xtype: 'lrq3'}
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
								html: 'How consistently does the surgeon utilize the materials described above?'
							}							
						]
					},
					{xtype: 'lrq4'}
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
								html: 'How confident is the surgeon with addressing common multifocal patient questions regarding cost, surgical procedure, post-surgical expectations and long-term results?'
							}							
						]
					},
					{xtype: 'lrq5'}
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
								html: 'How confident is the patient counselor, if one is assigned, in discussing lens options?'
							}							
						]										
					},
					{xtype: 'lrq6'}
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
								html: 'Rate the overall synergy between the staff\'s message about lens options during patient counseling and the surgeon\'s communication to the patient:'
							}							
						]
					},
					{xtype: 'lrq7'}
				]
			}
		]
    }
});