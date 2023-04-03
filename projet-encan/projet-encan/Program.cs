using Ancan_Context_Service.Services.AncanDb;
using Encan_Services.ExtensionMethods;
using Encan_Services.Services.S_Bidding;
using Encan_Services.Services.S_Client;
using Encan_Services.Services.S_Item;
using Encan_Services.Services.S_User;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddScoped<IClientService, ClientService>();
builder.Services.AddScoped<IBiddingService, BiddingService>();
builder.Services.AddScoped<IItemService, ItemService>();
builder.Services.AddScoped<IUserService, UserService>();

SecurityMethods.AddJwtAuthentication(builder.Services, builder.Configuration);

builder.Services.AddCors(options =>
{
    options.AddPolicy("DEFAULT_POLICY", policy =>
    {
        policy.WithOrigins("*")
               .AllowAnyOrigin()
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});
builder.Services.AddControllers().AddJsonOptions(x =>
                x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);
builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<AncanDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("Projet_encan_APIContext")));
builder.Services.AddCors(options =>
{
    options.AddPolicy("DEFAULT_POLICY", policy =>
    {
        policy.WithOrigins("*")
               .AllowAnyOrigin()
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseCors("DEFAULT_POLICY");
app.UseRouting();
app.UseCors("DEFAULT_POLICY");

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
