using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MaCopine.Models;

namespace MaCopine.Controllers;

public class PresentationController : Controller
{
    private readonly ILogger<PresentationController> _logger;

    public PresentationController(ILogger<PresentationController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
