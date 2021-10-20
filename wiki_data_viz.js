var descriptions = [
	{'filename': 'MatchedAssessment.csv', 'viz_id':'#matched_assessViz'},
	{'filename': 'UnmatchedAssessment.csv', 'viz_id':'#unmatched_assessViz'},
	{'filename': 'MatchedStats.csv', 'viz_id':'#matched_statsViz'},
	{'filename': 'UnmatchedStats.csv', 'viz_id':'#unmatched_statsViz'},
	{'filename': 'MatchedOdds.csv', 'viz_id':'#matched_odds'},
	{'filename': 'UnmatchedOdds.csv', 'viz_id':'#unmatched_odds'},
	{'filename': 'MatchedSectionAnalysis.csv', 'viz_id':'#matched_sections'},
	// {'filename': 'UnmatchedSectionAnalysis.csv', 'viz_id':'#unmatched_sections'},
	{'filename': 'LanguageAvailability.csv', 'viz_id':'#language_availability'},
	{'filename': 'LanguageLength.csv', 'viz_id':'#language_length'},
	{'filename': 'LanguageVEnglishLength.csv', 'viz_id':'#languageEnglishlength'},
	{'filename': 'ExamplePairs.csv', 'viz_id':'#ExamplePairs'}
]

var tabulate = function (data,viz_id) {
	$(viz_id).empty()
	var columns = Object.keys(data[0])
	var table = d3.select(viz_id).append("table")
	var thead = table.append('thead')
	var tbody = table.append('tbody')

	thead.append('tr')
	.selectAll('th')
		.data(columns)
		.enter()
	.append('th')
		.text(function (d) { return d })

	var rows = tbody.selectAll('tr')
		.data(data)
		.enter()
	.append('tr')

	var cells = rows.selectAll('td')
		.data(function(row) {
			return columns.map(function (column) {
				return { column: column, value: row[column] }
		})
	})
	.enter()
	.append('td')
	.text(function (d) { return d.value })

	return table;
}

function loadData(_dataID) {
	console.log(_dataID)
	console.log("I changed to separate rows")
	$("#resultsViz").show();
	// $("#actualStory").empty();

	// $("#unmatchedViz").show();
	// $("#unmatchedViz").empty();

	// var table_div = d3.select("#storyViz").append("div")
	// $(table_div).addClass("blockViz")
	// table_div.text("I did someting")


	// d3.csv('african_american_language.csv').then(function(data) {
	// 	var columns = ['','Treatment','Control','p-value of difference']
	//   	tabulate(data, columns)
	//   	console.log("Done")
	// })

	descriptions.forEach(function(d) {
		console.log("In map")
		d3.csv("data/" + _dataID + " - " + d.filename).then(function(data) {
			console.log(data)
		  	tabulate(data, d.viz_id)
		  	console.log("Done")
		})
	})

	// return Promise.all(
	// descriptions.map(d => tabulate(d))
	// 	// d3.csv('african_american_language.csv'),
		// d3.csv('african_american_matched_log_odds.csv'),
		// d3.csv('african_american_unmatched_log_odds.csv')
	// ).catch(function(err) {
	// 		console.log("Error")
	// 		console.log(err)
	// })


}
