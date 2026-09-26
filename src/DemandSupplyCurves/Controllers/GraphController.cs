using Microsoft.AspNetCore.Mvc;
using DemandSupplyCurves.Models;

namespace  DemandSupplyCurves.Controllers;

[ApiController]
[Route("/[controller]")]
public class GraphController : ControllerBase
{
    [HttpPost]
    public IActionResult Calculate(GraphRequest request)
    {
        
        // calculate the new price and quantity
        double price = request.SupplyShift * 2;
        double quantity = request.DemandShift / 2;

        var response = new GraphResponse
        {
            price = price,
            quantity = quantity,
            message = "Successfull."
        };

        return Ok(response);
    } 
}