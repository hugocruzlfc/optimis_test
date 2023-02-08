using System;
namespace OptimisTest.Models
{
	public class GroupModel
	{
	
        public int Id { get; set; }
        public string Name { get; set; }
		public string LabCountry { get; set; }
		public bool active { get; set; }
		public int[] StainId { get; set; }
    }

}

