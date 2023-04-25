import React from "react";
import styled, {css} from "styled-components";
import Header from "../Header/Header";
import { Link, useNavigate } from "react-router-dom";
import n1 from "../image/n1.png";
import Footer from "../Footer/Footer";
import PerfumeListPage from "./PerfumeList";

export const PerfumeStyle = styled.div`

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

		.tiles div {
			-moz-transition: -moz-transform 0.5s ease, opacity 0.5s ease;
			-webkit-transition: -webkit-transform 0.5s ease, opacity 0.5s ease;
			-ms-transition: -ms-transform 0.5s ease, opacity 0.5s ease;
			transition: transform 0.5s ease, opacity 0.5s ease;
			position: relative;
			width: calc(33.33333% - 2.5em);
			margin: 2.5em 0 0 2.5em;
		}

			.tiles div > .image {
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

				.tiles div > .image img {
					display: inline-block;
					width: 50%; /*사진 이미지크기*/
				}

				.tiles div > .image:before {
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

				.tiles div > .image:after {
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

			.tiles div > a {
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

				.tiles div > a > :last-child {
					margin: 0;
				}

				.tiles div > a:hover {
					color: #ffffff !important;
				} 

				.tiles div > a h2 {
					margin: 0;
				}

				.tiles div > a .content {
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

					.tiles div > a .content > :last-child {
						margin-bottom: 0;
					}

			.tiles div.style1 > .image:before {
				background-color: #ede6e6;
			} /*향수 div배경


			body:not(.is-touch) .tiles div:hover > .image {
				-moz-transform: scale(1.1);
				-webkit-transform: scale(1.1);
				-ms-transform: scale(1.1);
				transform: scale(1.1);
			}

				body:not(.is-touch) .tiles div:hover > .image:before {
					background-color: #333333;
					opacity: 0.35;
				}

				body:not(.is-touch) .tiles div:hover > .image:after {
					opacity: 0;
				}

			body:not(.is-touch) .tiles div:hover .content {
				max-height: 15em;
				opacity: 1;
			}

		* + .tiles {
			margin-top: 2em;
		}

		body.is-preload .tiles div {
			-moz-transform: scale(0.9);
			-webkit-transform: scale(0.9);
			-ms-transform: scale(0.9);
			transform: scale(0.9);
			opacity: 0;
		}

		body.is-touch .tiles div .content {
			max-height: 15em;
			opacity: 1;
		}

		@media screen and (max-width: 1280px) {

			.tiles {
				margin: -1.25em 0 0 -1.25em;
			}

				.tiles div {
					width: calc(33.33333% - 1.25em);
					margin: 1.25em 0 0 1.25em;
				}

		}

		@media screen and (max-width: 980px) {

			.tiles {
				margin: -2.5em 0 0 -2.5em;
			}

				.tiles div {
					width: calc(50% - 2.5em);
					margin: 2.5em 0 0 2.5em;
				}

		}

		@media screen and (max-width: 736px) {

			.tiles {
				margin: -1.25em 0 0 -1.25em;
			}

				.tiles div {
					width: calc(50% - 1.25em);
					margin: 1.25em 0 0 1.25em;
				}

					.tiles div:hover > .image {
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

				.tiles div {
					width: 100%;
					margin: 1.25em 0 0 0;
				}

		}

/* Header */

header {
		padding: 8em 0 0.1em 0 ;
	}

		header .logo {
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

			header .logo > * {
				display: inline-block;
				vertical-align: middle;
			}

			header .logo .symbol {
				margin-right: 0.65em;
			}

				header .logo .symbol img {
					display: block;
					width: 2em;
					height: 2em;
				}

		header nav {
			position: fixed;
			right: 2em;
			top: 2em;
			z-index: 1;
		}




		@media screen and (max-width: 736px) {

			header {
				padding: 4em 0 0.1em 0 ;
			}

				header nav {
					right: 0.5em;
					top: 0.5em;
				}

					header nav ul li a[href="#menu"]:before, header nav ul li a[href="#menu"]:after {
						background-size: 1.5em 1.5em;
					}

		}


/* Wrapper */

wrapper > * > .inner {
	background-color: #ffffff;
    width: 100%;
    max-width: 50em;
    margin: 0 auto;
    padding: 0 5em;
}

@media screen and (max-width: 200px) {
	
    wrapper > * > .inner {
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
                <h2>향수정보</h2>
            
            </header>
            <div class="tiles">
                <div class="style1">
                    <div class="image" >
                        <img src={n1} alt=""/>
						
                    </div>
					<Link>
                        <h2 onClick={()=>nav("/PerfumeList")}>향수1</h2>
						</Link>
                </div>
            </div>

			<div class="tiles">
                <div class="style1">
                    <div class="image" >
                        <img src={n1} alt=""/>
						
                    </div>
				
                        <h2 onClick={()=>nav("/PerfumeList")}>향수1</h2>
					
                </div>
            </div>

			<div class="tiles">
                <div class="style1">
                    <div class="image" >
                        <img src={n1} alt=""/>
						
                    </div>
					<Link>
                        <h2 onClick={()=>nav("/PerfumeList")}>향수1</h2>
						</Link>
                </div>
            </div>

			<div class="tiles">
                <div class="style1">
                    <div class="image" >
                        <img src={n1} alt=""/>
						
                    </div>
					<Link>
                        <h2 onClick={()=>nav("/PerfumeList")}>향수1</h2>
						</Link>
                </div>
            </div>
			
        </div>
    </div>



</div>
</PerfumeStyle>
<Footer/>
</>
);
}

export default PerfumePage;