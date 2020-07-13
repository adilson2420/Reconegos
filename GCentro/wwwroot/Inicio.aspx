<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Inicio.aspx.cs" Inherits="P.G.C.Atestado_Médico" %>


<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
      <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Inicio</title>
	<!-- BOOTSTRAP STYLES-->
    <link href="assets/css/bootstrap.css" rel="stylesheet" />
     <!-- FONTAWESOME STYLES-->
    <link href="assets/css/font-awesome.css" rel="stylesheet" />
        <!-- CUSTOM STYLES-->
    <link href="assets/css/custom.css" rel="stylesheet" />
     <!-- GOOGLE FONTS-->
    <link href="assets/css/light-bootstrap-dashboard.css" rel="stylesheet" />
   <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
</head>
<body>
    <div id="wrapper">
        <nav class="navbar navbar-default navbar-cls-top " role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="fa fa-bar"></span>
                    <span class="fa fa-bar"></span>
                    <span class="fa fa-bar"></span>
                </button>
                <a class="navbar-brand" href="index.html"><img src="" /></a> 
            </div>
  <div style="color: white;
padding: 15px 50px 5px 50px;
float: right;
font-size: 16px;"> Último Sessão : 13 Novembro 2019 &nbsp; <a class="btn btn-danger square-btn-adjust">Terminar sessão</a> </div>
        </nav>   
           <!-- /. NAV TOP  -->
                <nav class="navbar-default navbar-side" role="navigation">
            <div class="sidebar-collapse">
                <ul class="nav" id="main-menu">
				<li class="text-center">
                    <img src="assets/img/find_user.jpg" class="user-image img-responsive"/>
					</li>
				
					
                    <li>
                        <a class="active-menu" href="Atestado Médico.aspx"><i class="fa fa-home fa-3x"></i> Inicio</a>
                    </li>
                      <li>
                        <a href="#"><i class="fa fa-plus fa-3x"></i> Registos<span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                            <li>
                                <a href="Registo de Pacientes.aspx">Pacientes</a>
                            </li>
                              <li>
                                <a href="#">Funcionários<span class="fa arrow"></span></a>
                                <ul class="nav nav-third-level">
                                    <li>
                                        <a href="Registo de Medico.aspx">Médicos</a>
                                    </li>
                                    <li>
                                        <a href="Registo de Recepcionista.aspx">Recepecionista</a>
                                    </li>
                                    <li>
                                        <a href="Registo de Utilizadores.aspx">Utilizador</a>
                                    </li>

                                </ul>
                               
                            </li>
                        </ul>
                      </li> 
                     <li>
                        <a href="#"><i class="fa fa-search fa-3x"></i> Procurar<span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                           <li>
                                <a href="Registo de Pacientes.aspx">Pacientes</a>
                            </li>
                              <li>
                                <a href="#">Funcionários<span class="fa arrow"></span></a>
                                <ul class="nav nav-third-level">
                                    <li>
                                        <a href="Registo de Medico.aspx">Médicos</a>
                                    </li>
                                    <li>
                                        <a href="Registo de Recepcionista.aspx">Recepecionista</a>
                                    </li>
                                    </ul>
                               
                            </li>
                        </ul>
                      </li> 
                    <li>
                        <a  href="#"><i class="fa fa-qrcode fa-3x"></i> Atendimento</a>
                    </li>
						   <li>
                        <a  href="#"><i class="fa fa-medkit fa-3x"></i> Marcar consulta</a>
                    </li>	
                     
                   <li>
                        <a  href="Calendario.aspx"><i class="fa fa-calendar fa-3x"></i> Calendário</a>
                    </li>
                     <li>
                        <a  href="#"><i class="fa fa-edit fa-3x"></i> Relatório </a>
                    </li>
                     <li>
                        <a href="Bloqueio de ecrã.aspx"><i class="fa fa-unlock-alt fa-3x"></i> Bloquear</a>
                    </li>
                     <li>
                        <a href="Bloqueio de ecrã.aspx"><i class="fa fa-trash-o fa-3x"></i> Lixeira</a>
                    </li>	
                </ul>
               
            </div>
            
        </nav>  
        <!-- /. NAV SIDE  -->
        <div id="page-wrapper" >
            <div id="page-inner">
                <div class="row">
                    <div class="col-md-12">
                     <h2>Bem vindo </h2>   
                        <h5>Icones de acesso rápido. </h5>
                       </div>
                </div>
                     
                 <!-- /. ROW  --> 
                            <div class="row text-center pad-top">
                                 
                  <div class="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                      <div class="div-square">
                           <a href="blank.html" >
 <i class="fa fa-hospital-o fa-5x"></i>
                      <h4>Check Data</h4>
                      </a>
                      </div>
                     
                     
                  </div> 
                 
                  <div class="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                      <div class="div-square">
                           <a href="blank.html" >
 <i class="fa fa-envelope-o fa-5x"></i>
                      <h4>Mail Box</h4>
                      </a>
                      </div>
                     
                     
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                      <div class="div-square">
                           <a href="blank.html" >
 <i class="fa fa-lightbulb-o fa-5x"></i>
                      <h4>New Issues</h4>
                      </a>
                      </div>
                     
                     
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                      <div class="div-square">
                           <a href="blank.html" >
 <i class="fa fa-users fa-5x"></i>
                      <h4>See Users</h4>
                      </a>
                      </div>
                      </div>
                 <!-- /. ROW  --> 
                </div>
                                <div class="row text-center pad-top">
                     
                  
                  <div class="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                      <div class="div-square">
                           <a href="blank.html" >
 <i class="fa fa-key fa-5x"></i>
                      <h4>Admin </h4>
                      </a>
                      </div>
                     
                     
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                      <div class="div-square">
                           <a href="blank.html" >
 <i class="fa fa-comments-o fa-5x"></i>
                      <h4>Support</h4>
                      </a>
                      </div>
                     
                     
                  </div>
             
                 
                 <div class="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                      <div class="div-square">
                           <a href="blank.html" >
 <i class="fa fa-clipboard fa-5x"></i>
                      <h4>All Docs</h4>
                      </a>
                      </div>
                     
                     
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                      <div class="div-square">
                           <a href="blank.html" >
 <i class="fa fa-gear fa-5x"></i>
                      <h4>Settings</h4>
                      </a>
                      </div>
                      </div>
                                          </div>
                 <!-- /. ROW  --> 
                <div class="row text-center pad-top">
                     
            
                  <div class="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                      <div class="div-square">
                           <a href="blank.html" >
 <i class="fa fa-search fa-5x"></i>
                      <h4>Live Talk</h4>
                      </a>
                      </div>
                     
                     
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                      <div class="div-square">
                           <a href="blank.html" >
 <i class="fa fa-bell-o fa-5x"></i>
                      <h4>Notifications </h4>
                      </a>
                      </div>
                     
                     
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                      <div class="div-square">
                           <a href="blank.html" >
 <i class="fa fa-rocket fa-5x"></i>
                      <h4>Launch</h4>
                      </a>
                      </div>
                     
                     
                  </div>
                     <div class="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                      <div class="div-square">
                           <a href="blank.html" >
 <i class="fa fa-user fa-5x"></i>
                      <h4>Register User</h4>
                      </a>
                      </div>
                     
                     
                  </div> 
              </div>         
                 <!-- /. ROW  -->
                                        
               
     <!-- /. WRAPPER  -->
    <!-- SCRIPTS -AT THE BOTOM TO REDUCE THE LOAD TIME-->
    <!-- JQUERY SCRIPTS -->
    <script src="assets/js/jquery-1.10.2.js"></script>
      <!-- BOOTSTRAP SCRIPTS -->
    <script src="assets/js/bootstrap.min.js"></script>
    <!-- METISMENU SCRIPTS -->
    <script src="assets/js/jquery.metisMenu.js"></script>
      <!-- CUSTOM SCRIPTS -->
    <script src="assets/js/custom.js"></script>
 
</body>
</html>

