namespace KutuphaneProgramı.Data.Migrations
{
    using System.Data.Entity.Migrations;

    internal sealed class Configuration : DbMigrationsConfiguration<KutuphaneProgramı.Data.Context>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            AutomaticMigrationDataLossAllowed = true;
            ContextKey = "KutuphaneProgramı.Data.Context";
        }

        protected override void Seed(KutuphaneProgramı.Data.Context context)
        {
        }
    }
}
