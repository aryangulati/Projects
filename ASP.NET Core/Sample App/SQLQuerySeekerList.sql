create table dbo.SeekerList(
SeekerId int identity(1,1),
SeekerName varchar(500),
SeekerEmail varchar(500),
SeekerNo varchar(500),
SeekerDateOfBirth varchar(500),
SeekerGender varchar(500),
SeekerAdhaar varchar(500),
SeekerAddress varchar(500),
HospitalId int,
SeekerPassword varchar(500),
UpdateDate DATETIME DEFAULT CURRENT_TIMESTAMP
)