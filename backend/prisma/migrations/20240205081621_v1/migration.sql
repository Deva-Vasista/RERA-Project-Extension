-- CreateTable
CREATE TABLE "blocks" (
    "id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,
    "block_name" TEXT,
    "development_start_date" DATE,
    "development_end_date" DATE,
    "height" INTEGER,
    "fsi" INTEGER,
    "built_up_area" INTEGER,
    "commencement_certificate_no" TEXT,
    "date_of_latest_commencement_certificate" DATE,
    "all_commencement_certificates" TEXT,

    CONSTRAINT "blocks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "test" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR(20),
    "gender" CHAR(1),

    CONSTRAINT "test_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR(50),

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectExtension" (
    "id" SERIAL NOT NULL,
    "extendToDate" TEXT NOT NULL,
    "reasonForExtension" TEXT[],
    "supportingDocuments" TEXT,
    "supportingDocumentsOptions" TEXT,
    "documentDate" TEXT,
    "declarationFormB" TEXT,
    "authorizedSignatory" TEXT,
    "contactDetails" TEXT,
    "DevelopmentDateB1" TEXT,
    "DevelopmentDeclarationFormB1" TEXT,
    "DevelopmentAuthorizedSignatoryB1" TEXT,
    "contactB1" TEXT,
    "DevelopmentDateB2" TEXT,
    "DevelopmentDeclarationFormB2" TEXT,
    "LandOwnerB2" TEXT,
    "contactB2" TEXT,
    "order45" TEXT,
    "project_id" INTEGER NOT NULL,

    CONSTRAINT "ProjectExtension_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "blocks" ADD CONSTRAINT "blocks_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ProjectExtension" ADD CONSTRAINT "ProjectExtension_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
