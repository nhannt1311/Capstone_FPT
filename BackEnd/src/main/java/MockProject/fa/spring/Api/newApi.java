package MockProject.fa.spring.Api;


import java.io.IOException;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.sipios.springsearch.anotation.SearchSpec;

import MockProject.fa.spring.Entity.New;
import MockProject.fa.spring.Repository.NewRepository;
import MockProject.fa.spring.exception.ResourceNotFoundException;
import MockProject.fa.spring.service.NewService;
import MockProject.fa.spring.service.ServiceResult;

@RestController
@RequestMapping(path = "api/new")
@CrossOrigin(origins = "*", maxAge = 3600)

public class newApi {
	
	
	@Autowired
	private NewService newService;
	
	@Autowired
	private NewRepository newRepository;
	
	@GetMapping()
	public List<New> getNew(){
		return newService.getNew();
	}
	
	 @GetMapping(path= "/news/{id}")
	  public ResponseEntity<ServiceResult> findById(@PathVariable Long id) {
	    return new ResponseEntity<ServiceResult>(newService.findById(id), HttpStatus.OK);
	  }
	

	
	
	@DeleteMapping(path = "{newId}")
	public void deleteNew(@PathVariable("newId") Long newId) {
		newService.deleteNew(newId);
	}
	private static final Path CURRENT_FOLDER = Paths.get(System.getProperty("user.dir"));
	@PutMapping(path = "{newId}")
	public New  updateNew(@RequestBody @PathVariable("newId") Long newId, @RequestParam(required = false) String titleNew, 
						@RequestParam(required = false) String shortDescription,
						@RequestParam(required = false) String content,
						@RequestParam(required = false) MultipartFile image) throws IOException{
		Path staticPath = Paths.get("static");
		Path imagePath = Paths.get("images");
		if (!Files.exists(CURRENT_FOLDER.resolve(staticPath).resolve(imagePath))) {
			Files.createDirectories(CURRENT_FOLDER.resolve(staticPath).resolve(imagePath));
		}
		Path file = CURRENT_FOLDER.resolve(staticPath).resolve(imagePath).resolve(image.getOriginalFilename());
		try (OutputStream os = Files.newOutputStream(file)) {
			os.write(image.getBytes());
		}
		return newRepository.findById(newId).map(news -> {
			news.setImgNew(imagePath.resolve(image.getOriginalFilename()).toString());
			news.setShortDescription(shortDescription);
			news.setContent(content);
			news.setTitleNew(titleNew);

			
			return newRepository.save(news);
		}).orElseThrow(() -> new ResourceNotFoundException("newId " + newId + "not found"));
	}
	



    @PostMapping(path = "/addNew")
    @ResponseStatus(HttpStatus.CREATED)
    public New create(@RequestParam(required = false) String titleNew, 
			@RequestParam(required = false) String shortDescription,
			@RequestParam(required = false) String content,
			@RequestParam(required = false) MultipartFile image
                       ) throws IOException {
    	Path staticPath = Paths.get("static");
		Path imagePath = Paths.get("images");
        if (!Files.exists(CURRENT_FOLDER.resolve(staticPath).resolve(imagePath))) {
            Files.createDirectories(CURRENT_FOLDER.resolve(staticPath).resolve(imagePath));
        }
        Path file = CURRENT_FOLDER.resolve(staticPath)
                .resolve(imagePath).resolve(image.getOriginalFilename());
        try (OutputStream os = Files.newOutputStream(file)) {
            os.write(image.getBytes());
        }

        New _new = new New();
        _new.setTitleNew(titleNew);
        _new.setShortDescription(shortDescription);
        _new.setContent(content);
        _new.setImgNew(imagePath.resolve(image.getOriginalFilename()).toString());
        return newRepository.save(_new);
    }

    // hàm search
    @GetMapping(path = "/s")
    public ResponseEntity<List<New>> searchForNew(@SearchSpec Specification<New> specs) {
        return new ResponseEntity<>(newRepository.findAll(Specification.where(specs)), HttpStatus.OK);
    }
   

}
