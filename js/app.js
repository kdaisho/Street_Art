$('#btn').click(function() {
	$('#showcase').text('Loading...');
	var geoJSON = 'http://donnees.ville.montreal.qc.ca/dataset/53d2e586-6e7f-4eae-89a1-2cfa7fc29fa0/resource/d325352b-1c06-4c3a-bf5e-1e4c98e0636b/download/murales.geojson';
	$.getJSON(geoJSON, function(res) {
		$('#showcase').html('');
		for (var i = 0; i < res.features.length; i++) {
			var url = res.features[i].properties.image;
			var artist = res.features[i].properties.artiste;
			var organization = res.features[i].properties.organisation;
			
			var listItem = `<li class="m-b-20">
								<ul>
									<li>
										<img src="${url}" alt="graffiti"/>
									</li>
									<li class="is-size-5 is-size-6-mobile">
										Artist: ${addNonBreakingChar(artist)}
									</li>
									<li class="is-size-5 is-size-6-mobile">
										Organization: ${addNonBreakingChar(organization)}
									</li>
								</ul>
							</li>`;
			$('#showcase').append(listItem);
		}
	});
});

function addNonBreakingChar(value) {
	if (value !== null) {
		return value.replace(/-/g, '&#8209;');
	}
}