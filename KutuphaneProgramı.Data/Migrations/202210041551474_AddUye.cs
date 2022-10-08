namespace KutuphaneProgramı.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddUye : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Uye", "durum");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Uye", "durum", c => c.Int(nullable: false));
        }
    }
}
