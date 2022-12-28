const baseUrl = "https://pragyarosystem.onrender.com/src/utils/images/";

const serviceRequestTemplate = (data) => {
  const template = `
    <!DOCTYPE html>

<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">

<head>
	<title></title>
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
	<meta content="width=device-width, initial-scale=1.0" name="viewport" />
	<!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
	<!--[if !mso]><!-->
	<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css" />
	<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css" />
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css" />
	<!--<![endif]-->
	<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}
		.value-container{
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.value-table{
			width: 70%;
			padding: 5px;
			max-width: 680px;

		}
		/* .value-table>*{
			width: 30%;
		} */
		.value-table th, .value-table td {
			border-collapse: collapse;
  border: 1px solid black;
}

		@media (max-width:700px) {

			.desktop_hide table.icons-inner,
			.social_block.desktop_hide .social-table {
				display: inline-block !important;
			}

			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}

			.row-content {
				width: 100% !important;
			}

			.mobile_hide {
				display: none;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}

			.reverse {
				display: table;
				width: 100%;
			}

			.reverse .column.last {
				display: table-header-group !important;
			}

			.row-5 td.column.last .border {
				padding-left: 0;
				padding-right: 0;
				border-top: 0;
				border-right: 0px;
				border-bottom: 0;
				border-left: 0;
			}
			.value-table{
			width: 100%;

		}
		}
	</style>
</head>

<body style="background-color: #f9f9f9; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	<table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
		style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f9f9f9;" width="100%">
		<tbody>
			<tr>
				<td>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5d77a9; color: #000000; width: 680px;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<div class="spacer_block"
														style="height:10px;line-height:10px;font-size:1px;"> </div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5d77a9; color: #000000; width: 680px;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="heading_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad" style="width:100%;text-align:center;">
																<h1
																	style="margin: 0; color: #555555; font-size: 23px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; line-height: 120%; text-align: center; direction: ltr; font-weight: 700; letter-spacing: normal; margin-top: 0; margin-bottom: 0;">
																	<span class="tinyMce-placeholder"><span
																			style="color: #ffffff;">Pragya RO
																			System</span></span>
																</h1>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5d77a9; color: #000000; width: 680px;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<div class="spacer_block"
														style="height:10px;line-height:10px;font-size:1px;"> </div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #cbdbef; color: #000000; width: 680px;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="image_block block-2" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad"
																style="width:100%;padding-right:0px;padding-left:0px;padding-top:80px;">
																<div align="center" class="alignment"
																	style="line-height:10px"><img alt="Bell Icon"
																		src="${baseUrl}bell-icon.png"
																		style="display: block; height: auto; border: 0; width: 92px; max-width: 100%;"
																		title="Bell Icon" width="92" /></div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #cbdbef; color: #000000; width: 680px;"
										width="680">
										<tbody>
											<tr class="reverse">
												<td class="column column-1 last"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<div class="border">
														<table border="0" cellpadding="0" cellspacing="0"
															class="text_block block-1" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
															width="100%">
															<tr>
																<td class="pad"
																	style="padding-left:20px;padding-right:20px;padding-top:20px;">
																	<div
																		style="font-family: Georgia, 'Times New Roman', serif">
																		<div class=""
																			style="font-size: 14px; font-family: Georgia, Times, 'Times New Roman', serif; mso-line-height-alt: 16.8px; color: #2f2f2f; line-height: 1.2;">
																			<p
																				style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
																				<span style="font-size:18px;">Your
																					Service</span>
																			</p>
																		</div>
																	</div>
																</td>
															</tr>
														</table>
														<table border="0" cellpadding="0" cellspacing="0"
															class="text_block block-2" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
															width="100%">
															<tr>
																<td class="pad"
																	style="padding-bottom:25px;padding-left:20px;padding-right:20px;">
																	<div
																		style="font-family: Georgia, 'Times New Roman', serif">
																		<div class=""
																			style="font-size: 14px; font-family: Georgia, Times, 'Times New Roman', serif; mso-line-height-alt: 16.8px; color: #2f2f2f; line-height: 1.2;">
																			<p
																				style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
																				<span style="font-size:42px;"> Request
																					Submitted..!</span>
																			</p>
																		</div>
																	</div>
																</td>
															</tr>
														</table>
														<table border="0" cellpadding="0" cellspacing="0"
															class="text_block block-3" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
															width="100%">
															<tr>
																<td class="pad"
																	style="padding-bottom:10px;padding-left:30px;padding-right:30px;padding-top:10px;">
																	<div style="font-family: sans-serif">
																		<div class=""
																			style="font-size: 14px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 21px; color: #2f2f2f; line-height: 1.5;">
																			<p
																				style="margin: 0; font-size: 16px; text-align: center; mso-line-height-alt: 24px;">
																				<span style="font-size:16px;">Hi
																					<strong><u>
																							${data?.name}
																						</u></strong>,</span>
																			</p>
																			<p
																				style="margin: 0; font-size: 16px; text-align: center; mso-line-height-alt: 21px;">
																				 </p>
																			<p
																				style="margin: 0; font-size: 16px; text-align: center; mso-line-height-alt: 24px;">
																				Your service request has been submitted.
																			</p>
																			<p
																				style="margin: 0; font-size: 16px; text-align: center; mso-line-height-alt: 24px;">
																				<span style="font-size:16px;">Our
																					executive will connect with you in 3
																					working days.</span>
																			</p>
																		</div>
																	</div>
																</td>
															</tr>
														</table>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="value-container">
					<table class="value-table">
						<thead class="value-head">
							<th>Name</th>
							<th>Value</th>
						</thead>
						<tbody class="value-head">
							<tr>
								<td>Name</td>
								<td>${data.name}</td>
							</tr>
							<tr>
								<td>Phone</td>
								<td>${data?.mobile}</td>
							</tr>
							<tr>
								<td>Email</td>
								<td>${data.email}</td>
							</tr>
							<tr>
								<td>Address</td>
								<td>${data.address}</td>
							</tr>
							<tr>
								<td>Product Name</td>
								<td>${data.productName}</td>
							</tr>
							<tr>
								<td>Issue</td>
								<td>${data.issue}</td>
							</tr>
						</tbody>
					</table>
					</div>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #cbdbef; color: #000000; background-image: url('images/background-reminder.jpg'); background-repeat: repeat; width: 680px;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="empty_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad">
																<div></div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5d77a9; color: #000000; width: 680px;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="heading_block block-2" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad"
																style="width:100%;text-align:center;padding-top:20px;">
																<h1
																	style="margin: 0; color: #555555; font-size: 23px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; line-height: 120%; text-align: center; direction: ltr; font-weight: 700; letter-spacing: normal; margin-top: 0; margin-bottom: 0;">
																	<span class="tinyMce-placeholder"><span
																			style="color: #ffffff;">Pragya RO
																			System</span></span>
																</h1>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5d77a9; color: #000000; width: 680px;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="10" cellspacing="0"
														class="social_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad">
																<div align="center" class="alignment">
																	<table border="0" cellpadding="0" cellspacing="0"
																		class="social-table" role="presentation"
																		style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;"
																		width="108px">
																		<tr>
																			<td style="padding:0 2px 0 2px;"><a
																					href="https://www.facebook.com/"
																					target="_blank"><img alt="Facebook"
																						height="32"
																						src="${baseUrl}facebook2x.png"
																						style="display: block; height: auto; border: 0;"
																						title="Facebook"
																						width="32" /></a></td>
																			<td style="padding:0 2px 0 2px;"><a
																					href="https://twitter.com/"
																					target="_blank"><img alt="Twitter"
																						height="32"
																						src="${baseUrl}twitter2x.png"
																						style="display: block; height: auto; border: 0;"
																						title="Twitter"
																						width="32" /></a></td>
																			<td style="padding:0 2px 0 2px;"><a
																					href="https://instagram.com/"
																					target="_blank"><img alt="Instagram"
																						height="32"
																						src="${baseUrl}instagram2x.png"
																						style="display: block; height: auto; border: 0;"
																						title="Instagram"
																						width="32" /></a></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="10" cellspacing="0"
														class="text_block block-2" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad">
																<div style="font-family: sans-serif">
																	<div class=""
																		style="font-size: 14px; mso-line-height-alt: 21px; color: #f9f9f9; line-height: 1.5; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
																		<p
																			style="margin: 0; font-size: 12px; text-align: center; mso-line-height-alt: 18px;">
																			<span style="font-size:12px;">Krishna Vihar,
																				Gathola Road, Lakh No.11, Near Mahavir
																				Mandir, Bahiro, Ara, Bhojpur,
																				Bihar</span>
																		</p>
																		<p
																			style="margin: 0; font-size: 12px; text-align: center; mso-line-height-alt: 18px;">
																			<span
																				style="font-size:12px;">help.pragyarosystem@gmail.com</span>
																		</p>
																		<p
																			style="margin: 0; font-size: 12px; text-align: center; mso-line-height-alt: 18px;">
																			<span style="font-size:12px;">+91
																				8920310622</span>
																		</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-9"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5d77a9; color: #000000; width: 680px;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="10" cellspacing="0"
														class="text_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad">
																<div style="font-family: sans-serif">
																	<div class=""
																		style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #cfceca; line-height: 1.2; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
																		<p
																			style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
																			<span style="font-size:12px;">2022 © All
																				Rights Reserved Pragya RO System</span>
																		</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-10"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5d77a9; color: #000000; width: 680px;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<div class="spacer_block"
														style="height:20px;line-height:20px;font-size:1px;"> </div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-11"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="icons_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad"
																style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
																<table cellpadding="0" cellspacing="0"
																	role="presentation"
																	style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
																	width="100%">
																	<tr>
																		<td class="alignment"
																			style="vertical-align: middle; text-align: center;">
																			<!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
																			<!--[if !vml]><!-->
																			<table cellpadding="0" cellspacing="0"
																				class="icons-inner" role="presentation"
																				style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;">
																				<!--<![endif]-->
																			</table>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table><!-- End -->
</body>

</html>
    `;

  return template;
};
const serviceRequestReplyTemplate = (data) => {
  const template = `
    <!DOCTYPE html>

<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">

<head>
	<title></title>
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
	<meta content="width=device-width, initial-scale=1.0" name="viewport" />
	<!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
	<!--[if !mso]><!-->
	<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css" />
	<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css" />
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css" />
	<!--<![endif]-->
	<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}
		.value-container{
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.value-table{
			width: 70%;
			padding: 5px;
			max-width: 680px;

		}
		/* .value-table>*{
			width: 30%;
		} */
		.value-table th, .value-table td {
			border-collapse: collapse;
  border: 1px solid black;
}

		@media (max-width:700px) {

			.desktop_hide table.icons-inner,
			.social_block.desktop_hide .social-table {
				display: inline-block !important;
			}

			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}

			.row-content {
				width: 100% !important;
			}

			.mobile_hide {
				display: none;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}

			.reverse {
				display: table;
				width: 100%;
			}

			.reverse .column.last {
				display: table-header-group !important;
			}

			.row-5 td.column.last .border {
				padding-left: 0;
				padding-right: 0;
				border-top: 0;
				border-right: 0px;
				border-bottom: 0;
				border-left: 0;
			}
			.value-table{
			width: 100%;

		}
		}
	</style>
</head>

<body style="background-color: #f9f9f9; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	<table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
		style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f9f9f9;" width="100%">
		<tbody>
			<tr>
				<td>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5d77a9; color: #000000; width: 680px;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<div class="spacer_block"
														style="height:10px;line-height:10px;font-size:1px;"> </div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5d77a9; color: #000000; width: 680px;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="heading_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad" style="width:100%;text-align:center;">
																<h1
																	style="margin: 0; color: #555555; font-size: 23px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; line-height: 120%; text-align: center; direction: ltr; font-weight: 700; letter-spacing: normal; margin-top: 0; margin-bottom: 0;">
																	<span class="tinyMce-placeholder"><span
																			style="color: #ffffff;">Pragya RO
																			System</span></span>
																</h1>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5d77a9; color: #000000; width: 680px;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<div class="spacer_block"
														style="height:10px;line-height:10px;font-size:1px;"> </div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #cbdbef; color: #000000; width: 680px;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="image_block block-2" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad"
																style="width:100%;padding-right:0px;padding-left:0px;padding-top:80px;">
																<div align="center" class="alignment"
																	style="line-height:10px"><img alt="Bell Icon"
																		src="${baseUrl}bell-icon.png"
																		style="display: block; height: auto; border: 0; width: 92px; max-width: 100%;"
																		title="Bell Icon" width="92" /></div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #cbdbef; color: #000000; width: 680px;"
										width="680">
										<tbody>
											<tr class="reverse">
												<td class="column column-1 last"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<div class="border">
														<table border="0" cellpadding="0" cellspacing="0"
															class="text_block block-1" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
															width="100%">
															<tr>
																<td class="pad"
																	style="padding-left:20px;padding-right:20px;padding-top:20px;">
																	<div
																		style="font-family: Georgia, 'Times New Roman', serif">
																		<div class=""
																			style="font-size: 14px; font-family: Georgia, Times, 'Times New Roman', serif; mso-line-height-alt: 16.8px; color: #2f2f2f; line-height: 1.2;">
																			<p
																				style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
																				<span style="font-size:18px;">Your
																					Service</span>
																			</p>
																		</div>
																	</div>
																</td>
															</tr>
														</table>
														<table border="0" cellpadding="0" cellspacing="0"
															class="text_block block-2" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
															width="100%">
															<tr>
																<td class="pad"
																	style="padding-bottom:25px;padding-left:20px;padding-right:20px;">
																	<div
																		style="font-family: Georgia, 'Times New Roman', serif">
																		<div class=""
																			style="font-size: 14px; font-family: Georgia, Times, 'Times New Roman', serif; mso-line-height-alt: 16.8px; color: #2f2f2f; line-height: 1.2;">
																			<p
																				style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
																				<span style="font-size:42px;"> Request
																					Update..!</span>
																			</p>
																		</div>
																	</div>
																</td>
															</tr>
														</table>
														<table border="0" cellpadding="0" cellspacing="0"
															class="text_block block-3" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
															width="100%">
															<tr>
																<td class="pad"
																	style="padding-bottom:10px;padding-left:30px;padding-right:30px;padding-top:10px;">
																	<div style="font-family: sans-serif">
																		<div class=""
																			style="font-size: 14px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 21px; color: #2f2f2f; line-height: 1.5;">
																			<p
																				style="margin: 0; font-size: 16px; text-align: center; mso-line-height-alt: 24px;">
																				<span style="font-size:16px;">Hello
																					<strong><u>
																							${data?.name}
																						</u></strong>,</span>
																			</p>
																			<p
																				style="margin: 0; font-size: 16px; text-align: center; mso-line-height-alt: 21px;">
																				 </p>
																			<p
																				style="margin: 0; font-size: 16px; text-align: center; mso-line-height-alt: 24px;">
																				${data.adminFeedback}
																			</p>
																			
																		</div>
																	</div>
																</td>
															</tr>
														</table>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="value-container">
					<table class="value-table">
						<thead class="value-head">
							<th>Name</th>
							<th>Value</th>
						</thead>
						<tbody class="value-head">
							<tr>
								<td>Name</td>
								<td>${data.name}</td>
							</tr>
							<tr>
								<td>Phone</td>
								<td>${data?.mobile}</td>
							</tr>
							<tr>
								<td>Email</td>
								<td>${data.email}</td>
							</tr>
							<tr>
								<td>Address</td>
								<td>${data.address}</td>
							</tr>
							<tr>
								<td>Product Name</td>
								<td>${data.productName}</td>
							</tr>
							<tr>
								<td>Issue</td>
								<td>${data.issue}</td>
							</tr>
						</tbody>
					</table>
					</div>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #cbdbef; color: #000000; background-image: url('images/background-reminder.jpg'); background-repeat: repeat; width: 680px;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="empty_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad">
																<div></div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5d77a9; color: #000000; width: 680px;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="heading_block block-2" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad"
																style="width:100%;text-align:center;padding-top:20px;">
																<h1
																	style="margin: 0; color: #555555; font-size: 23px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; line-height: 120%; text-align: center; direction: ltr; font-weight: 700; letter-spacing: normal; margin-top: 0; margin-bottom: 0;">
																	<span class="tinyMce-placeholder"><span
																			style="color: #ffffff;">Pragya RO
																			System</span></span>
																</h1>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5d77a9; color: #000000; width: 680px;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="10" cellspacing="0"
														class="social_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad">
																<div align="center" class="alignment">
																	<table border="0" cellpadding="0" cellspacing="0"
																		class="social-table" role="presentation"
																		style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;"
																		width="108px">
																		<tr>
																			<td style="padding:0 2px 0 2px;"><a
																					href="https://www.facebook.com/"
																					target="_blank"><img alt="Facebook"
																						height="32"
																						src="${baseUrl}facebook2x.png"
																						style="display: block; height: auto; border: 0;"
																						title="Facebook"
																						width="32" /></a></td>
																			<td style="padding:0 2px 0 2px;"><a
																					href="https://twitter.com/"
																					target="_blank"><img alt="Twitter"
																						height="32"
																						src="${baseUrl}twitter2x.png"
																						style="display: block; height: auto; border: 0;"
																						title="Twitter"
																						width="32" /></a></td>
																			<td style="padding:0 2px 0 2px;"><a
																					href="https://instagram.com/"
																					target="_blank"><img alt="Instagram"
																						height="32"
																						src="${baseUrl}instagram2x.png"
																						style="display: block; height: auto; border: 0;"
																						title="Instagram"
																						width="32" /></a></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="10" cellspacing="0"
														class="text_block block-2" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad">
																<div style="font-family: sans-serif">
																	<div class=""
																		style="font-size: 14px; mso-line-height-alt: 21px; color: #f9f9f9; line-height: 1.5; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
																		<p
																			style="margin: 0; font-size: 12px; text-align: center; mso-line-height-alt: 18px;">
																			<span style="font-size:12px;">Krishna Vihar,
																				Gathola Road, Lakh No.11, Near Mahavir
																				Mandir, Bahiro, Ara, Bhojpur,
																				Bihar</span>
																		</p>
																		<p
																			style="margin: 0; font-size: 12px; text-align: center; mso-line-height-alt: 18px;">
																			<span
																				style="font-size:12px;">help.pragyarosystem@gmail.com</span>
																		</p>
																		<p
																			style="margin: 0; font-size: 12px; text-align: center; mso-line-height-alt: 18px;">
																			<span style="font-size:12px;">+91
																				8920310622</span>
																		</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-9"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5d77a9; color: #000000; width: 680px;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="10" cellspacing="0"
														class="text_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad">
																<div style="font-family: sans-serif">
																	<div class=""
																		style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #cfceca; line-height: 1.2; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
																		<p
																			style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
																			<span style="font-size:12px;">2022 © All
																				Rights Reserved Pragya RO System</span>
																		</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-10"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5d77a9; color: #000000; width: 680px;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<div class="spacer_block"
														style="height:20px;line-height:20px;font-size:1px;"> </div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-11"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="icons_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad"
																style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
																<table cellpadding="0" cellspacing="0"
																	role="presentation"
																	style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
																	width="100%">
																	<tr>
																		<td class="alignment"
																			style="vertical-align: middle; text-align: center;">
																			<!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
																			<!--[if !vml]><!-->
																			<table cellpadding="0" cellspacing="0"
																				class="icons-inner" role="presentation"
																				style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;">
																				<!--<![endif]-->
																			</table>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table><!-- End -->
</body>

</html>
    `;

  return template;
};

const serviceRequestAdminTemplate = (data) => {
  const template = `
    <!DOCTYPE html>

<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">

<head>
	<title></title>
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
	<meta content="width=device-width, initial-scale=1.0" name="viewport" />
	<!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
	<!--[if !mso]><!-->
	<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css" />
	<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css" />
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css" />
	<!--<![endif]-->
	<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}
		.value-container{
			width: 100%;
			margin: auto;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.value-table{
			width: 70%;
			padding: 5px;
			max-width: 680px;

		}
		/* .value-table>*{
			width: 30%;
		} */
		.value-table th, .value-table td {
			border-collapse: collapse;
  border: 1px solid black;
}

		@media (max-width:700px) {

			.desktop_hide table.icons-inner,
			.social_block.desktop_hide .social-table {
				display: inline-block !important;
			}

			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}

			.row-content {
				width: 100% !important;
			}

			.mobile_hide {
				display: none;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}

			.reverse {
				display: table;
				width: 100%;
			}

			.reverse .column.last {
				display: table-header-group !important;
			}

			.row-5 td.column.last .border {
				padding-left: 0;
				padding-right: 0;
				border-top: 0;
				border-right: 0px;
				border-bottom: 0;
				border-left: 0;
			}
			.value-table{
			width: 100%;

		}
		}
	</style>
</head>

<body style="background-color: #f9f9f9; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	<table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
		style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f9f9f9;" width="100%">
		<tbody>
			<tr>
				<td>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5d77a9; color: #000000; width: 680px;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<div class="spacer_block"
														style="height:10px;line-height:10px;font-size:1px;"> </div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5d77a9; color: #000000; width: 680px;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="heading_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad" style="width:100%;text-align:center;">
																<h1
																	style="margin: 0; color: #555555; font-size: 23px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; line-height: 120%; text-align: center; direction: ltr; font-weight: 700; letter-spacing: normal; margin-top: 0; margin-bottom: 0;">
																	<span class="tinyMce-placeholder"><span
																			style="color: #ffffff;">Pragya RO
																			System</span></span>
																</h1>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5d77a9; color: #000000; width: 680px;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<div class="spacer_block"
														style="height:10px;line-height:10px;font-size:1px;"> </div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #cbdbef; color: #000000; width: 680px;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="image_block block-2" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad"
																style="width:100%;padding-right:0px;padding-left:0px;padding-top:80px;">
																<div align="center" class="alignment"
																	style="line-height:10px"><img alt="Bell Icon"
																		src="${baseUrl}bell-icon.png"
																		style="display: block; height: auto; border: 0; width: 92px; max-width: 100%;"
																		title="Bell Icon" width="92" /></div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #cbdbef; color: #000000; width: 680px;"
										width="680">
										<tbody>
											<tr class="reverse">
												<td class="column column-1 last"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<div class="border">
														<table border="0" cellpadding="0" cellspacing="0"
															class="text_block block-1" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
															width="100%">
															<tr>
																<td class="pad"
																	style="padding-left:20px;padding-right:20px;padding-top:20px;">
																	<div
																		style="font-family: Georgia, 'Times New Roman', serif">
																		<div class=""
																			style="font-size: 14px; font-family: Georgia, Times, 'Times New Roman', serif; mso-line-height-alt: 16.8px; color: #2f2f2f; line-height: 1.2;">
																			<p
																				style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
																				<span style="font-size:18px;">We
																					Have a New</span>
																			</p>
																		</div>
																	</div>
																</td>
															</tr>
														</table>
														<table border="0" cellpadding="0" cellspacing="0"
															class="text_block block-2" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
															width="100%">
															<tr>
																<td class="pad"
																	style="padding-bottom:25px;padding-left:20px;padding-right:20px;">
																	<div
																		style="font-family: Georgia, 'Times New Roman', serif">
																		<div class=""
																			style="font-size: 14px; font-family: Georgia, Times, 'Times New Roman', serif; mso-line-height-alt: 16.8px; color: #2f2f2f; line-height: 1.2;">
																			<p
																				style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
																				<span style="font-size:42px;">Service
																				Request..!</span>
																			</p>
																		</div>
																	</div>
																</td>
															</tr>
														</table>
														<table border="0" cellpadding="0" cellspacing="0"
															class="text_block block-3" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
															width="100%">
															<tr>
																<td class="pad"
																	style="padding-bottom:10px;padding-left:30px;padding-right:30px;padding-top:10px;">
																	<div style="font-family: sans-serif">
																		<div class=""
																			style="font-size: 14px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 21px; color: #2f2f2f; line-height: 1.5;">
																			<p
																				style="margin: 0; font-size: 16px; text-align: center; mso-line-height-alt: 24px;">
																				<span style="font-size:16px;">Hello
																					<strong><u>
																							Admins
																						</u></strong>,</span>
																			</p>
																			<p
																				style="margin: 0; font-size: 16px; text-align: center; mso-line-height-alt: 21px;">
																				 </p>
																			<p
																				style="margin: 0; font-size: 16px; text-align: center; mso-line-height-alt: 24px;">
																				We got a new service request.
																			</p>
																			<p
																				style="margin: 0; font-size: 16px; text-align: center; mso-line-height-alt: 24px;">
																				To Resolve goto : <a href="https://pragyarosystem.onrender.com/admin/home">Pragya RO System</a> and see in service request section
																			</p>
																			<p
																				style="margin: 0; font-size: 16px; text-align: center; mso-line-height-alt: 24px;">
																				<span style="font-size:16px;">
																					These are the details : </span>
																			</p>
																		</div>
																	</div>
																</td>
															</tr>
														</table>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="value-container">
					<table class="value-table">
						<thead class="value-head">
							<th>Name</th>
							<th>Value</th>
						</thead>
						<tbody class="value-head">
							<tr>
								<td>Name</td>
								<td>${data.name}</td>
							</tr>
							<tr>
								<td>Phone</td>
								<td>${data?.mobile}</td>
							</tr>
							<tr>
								<td>Email</td>
								<td>${data.email}</td>
							</tr>
							<tr>
								<td>Address</td>
								<td>${data.address}</td>
							</tr>
							<tr>
								<td>Product Name</td>
								<td>${data.productName}</td>
							</tr>
							<tr>
								<td>Issue</td>
								<td>${data.issue}</td>
							</tr>
						</tbody>
					</table>
					</div>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #cbdbef; color: #000000; background-image: url('images/background-reminder.jpg'); background-repeat: repeat; width: 680px;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="empty_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad">
																<div></div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5d77a9; color: #000000; width: 680px;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="heading_block block-2" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad"
																style="width:100%;text-align:center;padding-top:20px;">
																<h1
																	style="margin: 0; color: #555555; font-size: 23px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; line-height: 120%; text-align: center; direction: ltr; font-weight: 700; letter-spacing: normal; margin-top: 0; margin-bottom: 0;">
																	<span class="tinyMce-placeholder"><span
																			style="color: #ffffff;">Pragya RO
																			System</span></span>
																</h1>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5d77a9; color: #000000; width: 680px;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="10" cellspacing="0"
														class="social_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad">
																<div align="center" class="alignment">
																	<table border="0" cellpadding="0" cellspacing="0"
																		class="social-table" role="presentation"
																		style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;"
																		width="108px">
																		<tr>
																			<td style="padding:0 2px 0 2px;"><a
																					href="https://www.facebook.com/"
																					target="_blank"><img alt="Facebook"
																						height="32"
																						src="${baseUrl}facebook2x.png"
																						style="display: block; height: auto; border: 0;"
																						title="Facebook"
																						width="32" /></a></td>
																			<td style="padding:0 2px 0 2px;"><a
																					href="https://twitter.com/"
																					target="_blank"><img alt="Twitter"
																						height="32"
																						src="${baseUrl}twitter2x.png"
																						style="display: block; height: auto; border: 0;"
																						title="Twitter"
																						width="32" /></a></td>
																			<td style="padding:0 2px 0 2px;"><a
																					href="https://instagram.com/"
																					target="_blank"><img alt="Instagram"
																						height="32"
																						src="${baseUrl}instagram2x.png"
																						style="display: block; height: auto; border: 0;"
																						title="Instagram"
																						width="32" /></a></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="10" cellspacing="0"
														class="text_block block-2" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad">
																<div style="font-family: sans-serif">
																	<div class=""
																		style="font-size: 14px; mso-line-height-alt: 21px; color: #f9f9f9; line-height: 1.5; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
																		<p
																			style="margin: 0; font-size: 12px; text-align: center; mso-line-height-alt: 18px;">
																			<span style="font-size:12px;">Krishna Vihar,
																				Gathola Road, Lakh No.11, Near Mahavir
																				Mandir, Bahiro, Ara, Bhojpur,
																				Bihar</span>
																		</p>
																		<p
																			style="margin: 0; font-size: 12px; text-align: center; mso-line-height-alt: 18px;">
																			<span
																				style="font-size:12px;">help.pragyarosystem@gmail.com</span>
																		</p>
																		<p
																			style="margin: 0; font-size: 12px; text-align: center; mso-line-height-alt: 18px;">
																			<span style="font-size:12px;">+91
																				8920310622</span>
																		</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-9"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5d77a9; color: #000000; width: 680px;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="10" cellspacing="0"
														class="text_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad">
																<div style="font-family: sans-serif">
																	<div class=""
																		style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #cfceca; line-height: 1.2; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
																		<p
																			style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
																			<span style="font-size:12px;">2022 © All
																				Rights Reserved Pragya RO System</span>
																		</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-10"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5d77a9; color: #000000; width: 680px;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<div class="spacer_block"
														style="height:20px;line-height:20px;font-size:1px;"> </div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-11"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="icons_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad"
																style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
																<table cellpadding="0" cellspacing="0"
																	role="presentation"
																	style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
																	width="100%">
																	<tr>
																		<td class="alignment"
																			style="vertical-align: middle; text-align: center;">
																			<!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
																			<!--[if !vml]><!-->
																			<table cellpadding="0" cellspacing="0"
																				class="icons-inner" role="presentation"
																				style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;">
																				<!--<![endif]-->
																			</table>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table><!-- End -->
</body>

</html>
    `;

  return template;
};

module.exports = { serviceRequestTemplate,serviceRequestAdminTemplate,serviceRequestReplyTemplate };
