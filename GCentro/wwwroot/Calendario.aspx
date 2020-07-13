<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Calendario.aspx.cs" Inherits="P.G.C.Calendario" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
      <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calendario</title>
	<!-- BOOTSTRAP STYLES-->
    <link href="assets/css/bootstrap.css" rel="stylesheet" />
     <!-- FONTAWESOME STYLES-->
    <link href="assets/css/font-awesome.css" rel="stylesheet" />
    <link href="calendario/css/style.css" rel="stylesheet" />
        <!-- CUSTOM STYLES-->
    <link href="assets/css/custom.css" rel="stylesheet" />
     <!-- GOOGLE FONTS-->
   <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
</head>
<body>
    <div id="wrapper">
        <nav class="navbar navbar-default navbar-cls-top " role="navigation" style="margin-bottom: 0">

            <script src="vendor/bootstrap/js/bootstrap2.min.js"></script>
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                    <span class="sr-only">Navegação</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.html">Bem Vindo!</a>
            </div>
            <div style="color: white; padding: 15px 50px 5px 50px; float: right; font-size: 16px;">
                Último Acesso : 30 Out 2019 &nbsp; <a href="LOGIN.aspx" class="btn btn-danger square-btn-adjust">TERMINAR SECÇÃO</a>
            </div>
        </nav>
        <!-- /. NAV TOP  -->
        <nav class="navbar-default navbar-side" role="navigation">
            <div class="sidebar-collapse">
                <ul class="nav" id="main-menu">
                    <li class="text-center">
                        <img src="assets/img/find_user.jpg" class="user-image img-responsive" />
                    </li>


                    <li>
                        <a class="active-menu" href="index.html"><i class="fa fa-home fa-3x"></i>Início</a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-sitemap fa-3x"></i>Cadastros<span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                            <li>
                                <a href="#">Pacientes</a>
                            </li>
                            <li>
                                <a href="#">Médicos</a>
                            </li>
                            <li>
                                <a href="#">Tipos de Atendimento<span class="fa arrow"></span></a>
                                <ul class="nav nav-third-level">
                                    <li>
                                        <a href="#">Third Level Link</a>
                                    </li>
                                    <li>
                                        <a href="#">Third Level Link</a>
                                    </li>
                                    <li>
                                        <a href="#">Third Level Link</a>
                                    </li>

                                </ul>

                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="tab-panel.html"><i class="fa fa-qrcode fa-3x"></i>Atendimento</a>
                    </li>
                    <li>
                        <a href="chart.html"><i class="fa fa-bar-chart-o fa-3x"></i>Consultas</a>
                    </li>
                    <li>
                        <a href="table.html"><i class="fa fa-table fa-3x"></i>Calendário</a>
                    </li>
                    <li>
                        <a href="form.html"><i class="fa fa-edit fa-3x"></i>Relatório</a>
                    </li>

                    <li>
                        <a href="blank.html"><i class="fa fa-square-o fa-3x"></i>Blank Page</a>
                    </li>
                </ul>

            </div>

        </nav>
        <!-- /. NAV SIDE  -->
        <div id="page-wrapper">
            <div id="page-inner">
                <div class="row">
                    <div class="col-md-12">
                        <h2>Registar nota no calendário</h2>
                        <div class="row">
                            <div class="col-md-12">
                                <form class="form-horizontal">
                                    <fieldset>
                                        <div class="panel panel-primary">
                                            <div class="panel-heading">Dados pessoais</div>

                                            <div class="panel-body">
                                                <div class="form-group">
                                                    <div class="calendar" id="calendar-app">
                                                        <div class="calendar--day-view" id="day-view">
                                                            <span class="day-view-exit" id="day-view-exit">&times;</span>
                                                            <span class="day-view-date" id="day-view-date">NOV 29 2019</span>
                                                            <div class="day-view-content">
                                                                <div class="day-highlight">
                                                                    Você <span class="day-eventos" id="day-eventos">não tem eventos para hoje</span>. &nbsp; <span tabindex="0" onkeyup="if(event.keyCode != 13) return; this.click();" class="day-eventos-link" id="add-event" data-date>Adicionar um novo evento?</span>
                                                                </div>
                                                                <div class="day-add-event" id="add-day-event-box" data-active="false">
                                                                    <div class="row">
                                                                        <div class="half">
                                                                            <label class="add-event-label">
                                                                                Nome do Evento
             
                                                                        <input type="text" class="add-event-edit add-event-edit--long" placeholder="Novo Evento" id="input-add-event-name">
                                                                            </label>
                                                                        </div>
                                                                        <div class="qtr">
                                                                            <label class="add-event-label">
                                                                                Inicio
             
                                                                        <input type="text" class="add-event-edit" placeholder="7:15" id="input-add-event-start-time" data-options="1,2,3,4,5,6,7,8,9,10,11,12" data-format="datetime">
                                                                                <input type="text" class="add-event-edit" placeholder="am" id="input-add-event-start-ampm" data-options="a,p,am,pm">
                                                                            </label>
                                                                        </div>
                                                                        <div class="qtr">
                                                                            <label class="add-event-label">
                                                                                Fim
             
                                                                        <input type="text" class="add-event-edit" placeholder="9" id="input-add-event-end-time" data-options="1,2,3,4,5,6,7,8,9,10,11,12" data-format="datetime">
                                                                                <input type="text" class="add-event-edit" placeholder="am" id="input-add-event-end-ampm" data-options="a,p,am,pm">
                                                                            </label>
                                                                        </div>
                                                                        <div class="half">
                                                                            <a onkeyup="if(event.keyCode != 13) return; this.click();" tabindex="0" id="add-event-save" class="event-btn--save event-btn">Salvar</a>
                                                                            <a tabindex="0" id="add-event-cancel" class="event-btn--cancel event-btn">Cancelar</a>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                <div id="day-eventos-list" class="day-eventos-list">
                                                                </div>
                                                                <div class="day-inspiration-quote" id="inspirational-quote">
                                                                    Every child is an artist.  The problem is how to remain an artist once he grows up. –Pablo Picasso
     
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="calendar--view" id="calendar-view">
                                                            <div class="cview__month">
                                                                <span class="cview__month-last" id="calendar-month-last">Abr</span>
                                                                <span class="cview__month-current" id="calendar-month">Mai</span>
                                                                <span class="cview__month-next" id="calendar-month-next">Jun</span>
                                                            </div>
                                                            <div class="cview__header">Domingo</div>
                                                            <div class="cview__header">Segunda</div>
                                                            <div class="cview__header">Terça</div>
                                                            <div class="cview__header">Quarta</div>
                                                            <div class="cview__header">Quinta</div>
                                                            <div class="cview__header">Sexta</div>
                                                            <div class="cview__header">Sábado</div>
                                                            <div class="calendar--view" id="dates">
                                                            </div>
                                                        </div>
                                                        <div class="footer">
                                                            <span><span id="footer-date" class="footer__link">Hoje é Mai 30</span></span>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </fieldset>

                                </form>

                            </div>


                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>



    <!-- SCRIPTS -AT THE BOTOM TO REDUCE THE LOAD TIME-->
  <!-- JQUERY SCRIPTS -->
    <script src="assets/js/jquery-1.10.2.js"></script>
      <!-- BOOTSTRAP SCRIPTS -->
    <script src="assets/js/bootstrap.min.js"></script>
    <!-- METISMENU SCRIPTS -->
    <script src="assets/js/jquery.metisMenu.js"></script>
      <!-- CUSTOM SCRIPTS -->
    <script src="assets/js/custom.js"></script>
    <script src="calendario/js/index.js"></script>
    
</body>
</html>
