import React from 'react'

function Footer() {
  return (
    <div>
      <div id="footerblurb">
				<div id="footerblurb-inner">
				
					<div className="column">
						<h2><span>Heading</span></h2>
						<p><script>generateText(2)</script></p>
					</div>	
					<div className="column">
						<h2><span>Heading</span></h2>
						<p><script>generateText(2)</script></p>
					</div>
					<div className="column">
						<h2><span>Heading</span></h2>
						<p><script>generateText(2)</script></p>
					</div>	
					
					<div className="clr"></div>
				</div>
			</div>
			<footer id="footer">
				<div id="footer-inner">
					<p>&copy; Copyright <a href="#">Your Site</a> &#124; <a href="#">Terms of Use</a> &#124; <a href="#">Privacy Policy</a></p>
					<div className="clr"></div>
				</div>
			</footer>
    </div>
  )
}

export default Footer
