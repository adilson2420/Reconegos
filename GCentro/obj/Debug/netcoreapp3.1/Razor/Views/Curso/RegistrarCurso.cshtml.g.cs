#pragma checksum "A:\Projecto\Reconegos\Reconegos\GCentro\Views\Curso\RegistrarCurso.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "4f228c4f198e3227f853ec4ba30b17d60055186c"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Curso_RegistrarCurso), @"mvc.1.0.view", @"/Views/Curso/RegistrarCurso.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"4f228c4f198e3227f853ec4ba30b17d60055186c", @"/Views/Curso/RegistrarCurso.cshtml")]
    public class Views_Curso_RegistrarCurso : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 2 "A:\Projecto\Reconegos\Reconegos\GCentro\Views\Curso\RegistrarCurso.cshtml"
  
    ViewData["Title"] = "RegistrarCurso";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
<h1>RegistrarCurso</h1>

<h4>CursoInfo</h4>
<hr />
<div class=""row"">
    <div class=""col-md-4"">
        <form asp-action=""RegistrarCurso"">
            <div asp-validation-summary=""ModelOnly"" class=""text-danger""></div>
            <div class=""form-group"">
                <label asp-for=""IdCururso"" class=""control-label""></label>
                <input asp-for=""IdCururso"" class=""form-control"" />
                <span asp-validation-for=""IdCururso"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""NomeCurso"" class=""control-label""></label>
                <input asp-for=""NomeCurso"" class=""form-control"" />
                <span asp-validation-for=""NomeCurso"" class=""text-danger""></span>
            </div>
            <div class=""form-group form-check"">
                <label class=""form-check-label"">
                    <input class=""form-check-input"" asp-for=""Estado"" />
                </label>
            </div>
            ");
            WriteLiteral(@"<div class=""form-group"">
                <label asp-for=""Descricao"" class=""control-label""></label>
                <input asp-for=""Descricao"" class=""form-control"" />
                <span asp-validation-for=""Descricao"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <input type=""submit"" value=""Create"" class=""btn btn-primary"" />
            </div>
        </form>
    </div>
</div>

<div>
    <a asp-action=""Index"">Back to List</a>
</div>

");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
