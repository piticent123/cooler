$(document).ready(() => {
	const rightSection = getRightSection();

	$('title').html("COOL - Central Office Online");
	$('body').prepend(`
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
			<a class="navbar-brand" href="#">COOL (Central Office Online)</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" 
					data-target="#navbarText" aria-controls="navbarText" 
					aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarText">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item">
						<a class="nav-link" href="/COOLPUWL/Individual/ShowIndividualPage.aspx">Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/COOLPUWL/MyPages/Browsers.html">Browser Support</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" data-toggle="modal" data-target="#aboutModal" href="#">About</a>
					</li>
				</ul>
				${rightSection}
			</div>
		</nav>
		<div id="aboutModal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">About</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="text-center">
							<img src="../Images/COOL.jpg" class="rounded" />
						</div>
						<br />
						<p>This extension was made out of frustration and love by Jordan Pitlor, the treasurer (at the time
						of development) of the Disney Appreciation Club.</p>
						
						<p>The source can be viewed <a href="https://github.com/piticent123/cooler">here</a>, and if
						something isn't working (or you want to say hi), I can be contacted 
						<a href="mailto:jpitlor@gmail.com">here</a></p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
					</div>
				</div>			
			</div>
		</div>
    `);
});

function getRightSection() {
	if (window.location.href === "https://www.coolfaces.net/COOLPUWL/MyPages/Browsers.html") {
		return "";
	}

	let logOutLink = $('#PageHeader__SignIn')[0].href;
	let name = $('#PageHeader__UserStatusLbl')[0].innerText.substr("Hello ".length);

	return `<ul class="navbar-nav">
				<li class="nav-item">
					<span class="navbar-text active">Hello, ${name}!</span>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="${logOutLink}">Log Out</a>
				</li>
			</ul>`;
}