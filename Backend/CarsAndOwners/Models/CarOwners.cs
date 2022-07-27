using System;
namespace TeslaCarsAndOwners.Models
{
	public class CarOwners
	{
		public int Ownerid { get; set; }
		public string? OwnerName { get; set; }
		public int? OwnerAge { get; set; }
		public string? Models { get; set; }
		public string? DateOfPurchase { get; set; }
		public string? PhotoFileName { get; set; }
	}
}

