var builder = WebApplication.CreateBuilder(args);

// controllers 
builder.Services.AddControllers();

// allowing frontend requests
builder.Services.AddCors(options=>
{
    options.AddPolicy("FrontendPolicy", policy =>
    {
        policy
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

// build the app
var app = builder.Build();

// enable CORS
app.UseCors("FrontendPolicy");

// https redirection (secure)
app.UseHttpsRedirection();

app.MapControllers();

app.Run();

