import React from "react";
import styled, {css} from "styled-components";
import Header from "../Header/Header";
import { Link, useNavigate } from "react-router-dom";

export const PerfumeStyle = styled.div`
   
		a:hover {
			border-bottom-color: transparent;
			color: #e24d77 !important; /*메뉴 안 호버 컬러*/
		}

	strong, b {
		font-weight: 900;
	}

	em, i {
		font-style: italic;
	}

	p {
		margin: 0 0 2em 0;
	}

	h1 {
		font-size: 2.75em;
		font-weight: 700;
		line-height: 1.3;
		margin: 0 0 1em 0;
		letter-spacing: -0.035em;
	}

		h1 a {
			color: inherit;
		}

		@media screen and (max-width: 736px) {

			h1 {
				font-size: 2em;
				margin: 0 0 1em 0;
			}

		}

		@media screen and (max-width: 360px) {

			h1 {
				font-size: 1.75em;
			}

		}

	h2, h3, h4, h5, h6 {
		font-weight: 900;
		line-height: 1.5;
		margin: 0 0 2em 0;
		text-transform: uppercase;
		letter-spacing: 0.35em;
	}

		h2 a, h3 a, h4 a, h5 a, h6 a {
			color: inherit;
		}

	h2 {
		font-size: 1.1em;
	}

	h3 {
		font-size: 1em;
	}

	h4 {
		font-size: 0.8em;
	}

	h5 {
		font-size: 0.8em;
	}

	h6 {
		font-size: 0.8em;
	}

	@media screen and (max-width: 980px) {

		h1 br, h2 br, h3 br, h4 br, h5 br, h6 br {
			display: none;
		}

	}

	@media screen and (max-width: 736px) {

		h2 {
			font-size: 1em;
		}

		h3 {
			font-size: 0.8em;
		}

	}






/* Tiles */

	.tiles {
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		-moz-flex-wrap: wrap;
		-webkit-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		postiion: relative;
		margin: -2.5em 0 0 -2.5em;
	}

		.tiles article {
			-moz-transition: -moz-transform 0.5s ease, opacity 0.5s ease;
			-webkit-transition: -webkit-transform 0.5s ease, opacity 0.5s ease;
			-ms-transition: -ms-transform 0.5s ease, opacity 0.5s ease;
			transition: transform 0.5s ease, opacity 0.5s ease;
			position: relative;
			width: calc(33.33333% - 2.5em);
			margin: 2.5em 0 0 2.5em;
		}

			.tiles article > .image {
				-moz-transition: -moz-transform 0.5s ease;
				-webkit-transition: -webkit-transform 0.5s ease;
				-ms-transition: -ms-transform 0.5s ease;
				transition: transform 0.5s ease;
				position: relative;
				display: block;
				width: 100%;
				border-radius: 4px;
				overflow: hidden;
			}

				.tiles article > .image img {
					display: block;
					width: 70%; /*사진 이미지크기*/
				}

				.tiles article > .image:before {
					pointer-events: none;
					-moz-transition: background-color 0.5s ease, opacity 0.5s ease;
					-webkit-transition: background-color 0.5s ease, opacity 0.5s ease;
					-ms-transition: background-color 0.5s ease, opacity 0.5s ease;
					transition: background-color 0.5s ease, opacity 0.5s ease;
					content: '';
					display: block;
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					opacity: 1.0;
					z-index: 1;
					opacity: 0.8;
				}

				.tiles article > .image:after {
					pointer-events: none;
					-moz-transition: opacity 0.5s ease;
					-webkit-transition: opacity 0.5s ease;
					-ms-transition: opacity 0.5s ease;
					transition: opacity 0.5s ease;
					content: '';
					display: block;
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cstyle%3Eline %7B stroke-width: 0.25px%3B stroke: %23ffffff%3B %7D%3C/style%3E%3Cline x1='0' y1='0' x2='100' y2='100' /%3E%3Cline x1='100' y1='0' x2='0' y2='100' /%3E%3C/svg%3E");
					background-position: center;
					background-repeat: no-repeat;
					background-size: 100% 100%;
					opacity: 0.25;
					z-index: 2;
				}

			.tiles article > a {
				display: -moz-flex;
				display: -webkit-flex;
				display: -ms-flex;
				display: flex;
				-moz-flex-direction: column;
				-webkit-flex-direction: column;
				-ms-flex-direction: column;
				flex-direction: column;
				-moz-align-items: center;
				-webkit-align-items: center;
				-ms-align-items: center;
				align-items: center;
				-moz-justify-content: center;
				-webkit-justify-content: center;
				-ms-justify-content: center;
				justify-content: center;
				-moz-transition: background-color 0.5s ease, -moz-transform 0.5s ease;
				-webkit-transition: background-color 0.5s ease, -webkit-transform 0.5s ease;
				-ms-transition: background-color 0.5s ease, -ms-transform 0.5s ease;
				transition: background-color 0.5s ease, transform 0.5s ease;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				padding: 1em;
				border-radius: 4px;
				border-bottom: 0;
				color: #5e5959;
				text-align: center;
				text-decoration: none;
				z-index: 3;
			}

				.tiles article > a > :last-child {
					margin: 0;
				}

				.tiles article > a:hover {
					color: #ffffff !important;
				} 

				.tiles article > a h2 {
					margin: 0;
				}

				.tiles article > a .content {
					-moz-transition: max-height 0.5s ease, opacity 0.5s ease;
					-webkit-transition: max-height 0.5s ease, opacity 0.5s ease;
					-ms-transition: max-height 0.5s ease, opacity 0.5s ease;
					transition: max-height 0.5s ease, opacity 0.5s ease;
					width: 100%;
					max-height: 0;
					line-height: 1.5;
					margin-top: 0.35em;
					opacity: 0;
				}

					.tiles article > a .content > :last-child {
						margin-bottom: 0;
					}

			.tiles article.style1 > .image:before {
				background-color: #ede6e6;
			}

			.tiles article.style2 > .image:before {
				background-color: #ede6e6;
			}

			.tiles article.style3 > .image:before {
				background-color: #ede6e6;
			}

			.tiles article.style4 > .image:before {
				background-color: #ede6e6;
			}

			.tiles article.style5 > .image:before {
				background-color: #ede6e6;
			}

			.tiles article.style6 > .image:before {
				background-color: #ede6e6;
			}

			body:not(.is-touch) .tiles article:hover > .image {
				-moz-transform: scale(1.1);
				-webkit-transform: scale(1.1);
				-ms-transform: scale(1.1);
				transform: scale(1.1);
			}

				body:not(.is-touch) .tiles article:hover > .image:before {
					background-color: #333333;
					opacity: 0.35;
				}

				body:not(.is-touch) .tiles article:hover > .image:after {
					opacity: 0;
				}

			body:not(.is-touch) .tiles article:hover .content {
				max-height: 15em;
				opacity: 1;
			}

		* + .tiles {
			margin-top: 2em;
		}

		body.is-preload .tiles article {
			-moz-transform: scale(0.9);
			-webkit-transform: scale(0.9);
			-ms-transform: scale(0.9);
			transform: scale(0.9);
			opacity: 0;
		}

		body.is-touch .tiles article .content {
			max-height: 15em;
			opacity: 1;
		}

		@media screen and (max-width: 1280px) {

			.tiles {
				margin: -1.25em 0 0 -1.25em;
			}

				.tiles article {
					width: calc(33.33333% - 1.25em);
					margin: 1.25em 0 0 1.25em;
				}

		}

		@media screen and (max-width: 980px) {

			.tiles {
				margin: -2.5em 0 0 -2.5em;
			}

				.tiles article {
					width: calc(50% - 2.5em);
					margin: 2.5em 0 0 2.5em;
				}

		}

		@media screen and (max-width: 736px) {

			.tiles {
				margin: -1.25em 0 0 -1.25em;
			}

				.tiles article {
					width: calc(50% - 1.25em);
					margin: 1.25em 0 0 1.25em;
				}

					.tiles article:hover > .image {
						-moz-transform: scale(1.0);
						-webkit-transform: scale(1.0);
						-ms-transform: scale(1.0);
						transform: scale(1.0);
					}

		}

		@media screen and (max-width: 480px) {

			.tiles {
				margin: 0;
			}

				.tiles article {
					width: 100%;
					margin: 1.25em 0 0 0;
				}

		}

/* Header */

	#header {
		padding: 8em 0 0.1em 0 ;
	}

		#header .logo {
			display: block;
			border-bottom: 0;
			color: inherit;
			font-weight: 900;
			letter-spacing: 0.35em;
			margin: 0 0 2.5em 0;
			text-decoration: none;
			text-transform: uppercase;
			display: inline-block;
		}

			#header .logo > * {
				display: inline-block;
				vertical-align: middle;
			}

			#header .logo .symbol {
				margin-right: 0.65em;
			}

				#header .logo .symbol img {
					display: block;
					width: 2em;
					height: 2em;
				}

		#header nav {
			position: fixed;
			right: 2em;
			top: 2em;
			z-index: 10000;
		}

			#header nav ul {
				display: -moz-flex;
				display: -webkit-flex;
				display: -ms-flex;
				display: flex;
				-moz-align-items: center;
				-webkit-align-items: center;
				-ms-align-items: center;
				align-items: center;
				list-style: none;
				margin: 0;
				padding: 0;
			}

				#header nav ul li {
					display: block;
					padding: 0;
				}

					#header nav ul li a {
						display: block;
						position: relative;
						height: 3em;
						line-height: 3em;
						padding: 0 1.5em;
						background-color: rgba(255, 255, 255, 0.5);
						border-radius: 4px;
						border: 0;
						font-size: 0.8em;
						font-weight: 900;
						letter-spacing: 0.35em;
						text-transform: uppercase;
					}

					#header nav ul li a[href="#menu"] {
						-webkit-tap-highlight-color: transparent;
						width: 4em;
						text-indent: 4em;
						font-size: 1em;
						overflow: hidden;
						padding: 0;
						white-space: nowrap;
					}

						#header nav ul li a[href="#menu"]:before, #header nav ul li a[href="#menu"]:after {
							-moz-transition: opacity 0.2s ease;
							-webkit-transition: opacity 0.2s ease;
							-ms-transition: opacity 0.2s ease;
							transition: opacity 0.2s ease;
							content: '';
							display: block;
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
							background-position: center;
							background-repeat: no-repeat;
							background-size: 2em 2em;
						}

						#header nav ul li a[href="#menu"]:before {
							background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cstyle%3Eline %7B stroke-width: 8px%3B stroke: %23f2849e%3B %7D%3C/style%3E%3Cline x1='0' y1='25' x2='100' y2='25' /%3E%3Cline x1='0' y1='50' x2='100' y2='50' /%3E%3Cline x1='0' y1='75' x2='100' y2='75' /%3E%3C/svg%3E");
							opacity: 0;
						}

						#header nav ul li a[href="#menu"]:after {
							background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cstyle%3Eline %7B stroke-width: 8px%3B stroke: %23585858%3B %7D%3C/style%3E%3Cline x1='0' y1='25' x2='100' y2='25' /%3E%3Cline x1='0' y1='50' x2='100' y2='50' /%3E%3Cline x1='0' y1='75' x2='100' y2='75' /%3E%3C/svg%3E");
							opacity: 1;
						}

						#header nav ul li a[href="#menu"]:hover:before {
							opacity: 1;
						}

						#header nav ul li a[href="#menu"]:hover:after {
							opacity: 0;
						}

		@media screen and (max-width: 736px) {

			#header {
				padding: 4em 0 0.1em 0 ;
			}

				#header nav {
					right: 0.5em;
					top: 0.5em;
				}

					#header nav ul li a[href="#menu"]:before, #header nav ul li a[href="#menu"]:after {
						background-size: 1.5em 1.5em;
					}

		}

/* Menu */

	#wrapper {
		-moz-transition: opacity 0.45s ease;
		-webkit-transition: opacity 0.45s ease;
		-ms-transition: opacity 0.45s ease;
		transition: opacity 0.45s ease;
		opacity: 1;
	}

	#menu {
		-moz-transform: translateX(22em);
		-webkit-transform: translateX(22em);
		-ms-transform: translateX(22em);
		transform: translateX(22em);
		-moz-transition: -moz-transform 0.45s ease, visibility 0.45s;
		-webkit-transition: -webkit-transform 0.45s ease, visibility 0.45s;
		-ms-transition: -ms-transform 0.45s ease, visibility 0.45s;
		transition: transform 0.45s ease, visibility 0.45s;
		position: fixed;
		top: 0;
		right: 0;
		width: 15em;
		max-width: 80%;
		height: 100%;
		-webkit-overflow-scrolling: touch;
		background: #e6a7a7; /* 메뉴컬러*/
		color: #ffffff;
		cursor: default;
		visibility: hidden;
		z-index: 10002;
	}

		#menu > .inner {
			-moz-transition: opacity 0.45s ease;
			-webkit-transition: opacity 0.45s ease;
			-ms-transition: opacity 0.45s ease;
			transition: opacity 0.45s ease;
			-webkit-overflow-scrolling: touch;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			padding: 2.75em;
			opacity: 0;
			overflow-y: auto;
		}

			#menu > .inner > ul {
				list-style: none;
				margin: 0 0 1em 0;
				padding: 0;
			}

				#menu > .inner > ul > li {
					padding: 0;
					border-top: solid 1px rgba(255, 255, 255, 0.15);
				}

					#menu > .inner > ul > li a {
						display: block;
						padding: 1em 0;
						line-height: 1.5;
						border: 0;
						color: inherit;
					}

					#menu > .inner > ul > li:first-child {
						border-top: 0;
						margin-top: -1em;
					}

		#menu > .close {
			-moz-transition: opacity 0.45s ease, -moz-transform 0.45s ease;
			-webkit-transition: opacity 0.45s ease, -webkit-transform 0.45s ease;
			-ms-transition: opacity 0.45s ease, -ms-transform 0.45s ease;
			transition: opacity 0.45s ease, transform 0.45s ease;
			-moz-transform: scale(0.25) rotate(180deg);
			-webkit-transform: scale(0.25) rotate(180deg);
			-ms-transform: scale(0.25) rotate(180deg);
			transform: scale(0.25) rotate(180deg);
			-webkit-tap-highlight-color: transparent;
			display: block;
			position: absolute;
			top: 2em;
			left: -6em;
			width: 6em;
			text-indent: 6em;
			height: 3em;
			border: 0;
			font-size: 1em;
			opacity: 0;
			overflow: hidden;
			padding: 0;
			white-space: nowrap;
		}

			#menu > .close:before, #menu > .close:after {
				-moz-transition: opacity 0.2s ease;
				-webkit-transition: opacity 0.2s ease;
				-ms-transition: opacity 0.2s ease;
				transition: opacity 0.2s ease;
				content: '';
				display: block;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-position: center;
				background-repeat: no-repeat;
				background-size: 2em 2em;
			}

			#menu > .close:before {
				background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cstyle%3Eline %7B stroke-width: 8px%3B stroke: %23f2849e%3B %7D%3C/style%3E%3Cline x1='15' y1='15' x2='85' y2='85' /%3E%3Cline x1='85' y1='15' x2='15' y2='85' /%3E%3C/svg%3E");
				opacity: 0;
			}

			#menu > .close:after {
				background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cstyle%3Eline %7B stroke-width: 8px%3B stroke: %23585858%3B %7D%3C/style%3E%3Cline x1='15' y1='15' x2='85' y2='85' /%3E%3Cline x1='85' y1='15' x2='15' y2='85' /%3E%3C/svg%3E");
				opacity: 1;
			}

			#menu > .close:hover:before {
				opacity: 1;
			}

			#menu > .close:hover:after {
				opacity: 0;
			}

		@media screen and (max-width: 736px) {

			#menu {
				-moz-transform: translateX(16.5em);
				-webkit-transform: translateX(16.5em);
				-ms-transform: translateX(16.5em);
				transform: translateX(16.5em);
				width: 16.5em;
			}

				#menu > .inner {
					padding: 2.75em 1.5em;
				}

				#menu > .close {
					top: 0.5em;
					left: -4.25em;
					width: 4.25em;
					text-indent: 4.25em;
				}

					#menu > .close:before, #menu > .close:after {
						background-size: 1.5em 1.5em;
					}

		}

	body.is-menu-visible #wrapper {
		pointer-events: none;
		cursor: default;
		opacity: 0.25;
	}

	body.is-menu-visible #menu {
		-moz-transform: translateX(0);
		-webkit-transform: translateX(0);
		-ms-transform: translateX(0);
		transform: translateX(0);
		visibility: visible;
	}

		body.is-menu-visible #menu > * {
			opacity: 1;
		}

		body.is-menu-visible #menu .close {
			-moz-transform: scale(1.0) rotate(0deg);
			-webkit-transform: scale(1.0) rotate(0deg);
			-ms-transform: scale(1.0) rotate(0deg);
			transform: scale(1.0) rotate(0deg);
			opacity: 1;
		}

/* Main */

	#main {
		padding: 0em 0 6em 0 ;
	}

		@media screen and (max-width: 736px) {

			#main {
				padding: 0em 0 4em 0 ;
			}

		}


/* Wrapper */

#wrapper > * > .inner {
	background-color: #ffffff;
    width: 100%;
    max-width: 50em;
    margin: 0 auto;
    padding: 0 5em;
}

@media screen and (max-width: 200px) {
	
    #wrapper > * > .inner {
        padding: 0 1.25em;
    }
}
`;



const PerfumePage = () => {
	const nav = useNavigate();
    return(
        <>
            <Header />
            <PerfumeStyle>
            <div id="wrapper">

    <div id="main">
        <div class="inner">
            <header>
                <h1>향수정보</h1>
            
            </header>
            <section class="tiles">
                <article class="style1">
                    <span class="image">
                        <img src="images/n1.png" alt="" />
                    </span>
                    <a href="generic.html">
                        <h2>향수1</h2>
                        <div class="content">
                            <p>향수 어쩌구저쩌구~</p>
                        </div>
                    </a>
                </article>
                <article class="style2">
                    <span class="image">
                        <img src="images/n1.png" alt="" />
                    </span>
                    <a href="generic.html">
                        <h2>향수2</h2>
                        <div class="content">
                            <p>향수 어쩌구저쩌구~</p>
                        </div>
                    </a>
                </article>
                <article class="style3">
                    <span class="image">
                        <img src="images/n1.png" alt="" />
                    </span>
                    <a href="generic.html">
                        <h2>향수3</h2>
                        <div class="content">
                            <p>향수 어쩌구저쩌구~</p>
                        </div>
                    </a>
                </article>
                <article class="style4">
                    <span class="image">
                        <img src="images/n1.png" alt="" />
                    </span>
                    <a href="generic.html">
                        <h2>향수4</h2>
                        <div class="content">
                            <p>향수 어쩌구저쩌구~</p>
                        </div>
                    </a>
                </article>
                <article class="style5">
                    <span class="image">
                        <img src="images/n1.png" alt="" />
                    </span>
                    <a href="generic.html">
                        <h2>향수5</h2>
                        <div class="content">
                            <p>향수 어쩌구저쩌구~</p>
                        </div>
                    </a>
                </article>
                <article class="style6">
                    <span class="image">
                        <img src="images/n1.png" alt="" />
                    </span>
                    <a href="generic.html">
                        <h2>향수6</h2>
                        <div class="content">
                            <p>향수 어쩌구저쩌구~</p>
                        </div>
                    </a>
                </article>
                <article class="style2">
                    <span class="image">
                        <img src="images/n1.png" alt="" />
                    </span>
                    <a href="generic.html">
                        <h2>향수7</h2>
                        <div class="content">
                            <p>향수 어쩌구저쩌구~</p>
                        </div>
                    </a>
                </article>
                <article class="style3">
                    <span class="image">
                        <img src="images/n1.png" alt="" />
                    </span>
                    <a href="generic.html">
                        <h2>향수8</h2>
                        <div class="content">
                            <p>향수 어쩌구저쩌구~</p>
                        </div>
                    </a>
                </article>
                <article class="style1">
                    <span class="image">
                        <img src="images/n1.png" alt="" />
                    </span>
                    <a href="generic.html">
                        <h2>향수9</h2>
                        <div class="content">
                            <p>향수 어쩌구저쩌구~</p>
                        </div>
                    </a>
                </article>
                
                
            </section>
        </div>
    </div>



</div>
</PerfumeStyle>

</>
);
}

export default PerfumePage;