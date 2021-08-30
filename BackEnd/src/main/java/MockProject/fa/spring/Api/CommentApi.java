package MockProject.fa.spring.Api;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import MockProject.fa.spring.Entity.Account;
import MockProject.fa.spring.Entity.Comment;
import MockProject.fa.spring.Entity.Order;
import MockProject.fa.spring.Entity.Stadium;
import MockProject.fa.spring.Repository.AccountRepository;
import MockProject.fa.spring.Repository.CommentRepository;
import MockProject.fa.spring.Repository.StadiumRepository;
import MockProject.fa.spring.exception.ResourceNotFoundException;

@RestController
@RequestMapping("api/comments")
@CrossOrigin(origins = "*", maxAge = 3600)
public class CommentApi {

	@Autowired
	private CommentRepository commentRepository;
	@Autowired
	private AccountRepository accountRepository;

	@Autowired
	private StadiumRepository stadiumRepository;
	
	@GetMapping()
	public Page<Comment> getAllComment(Pageable pageable) {
		return commentRepository.findAll(pageable);
	}

	@GetMapping("{accountId}/comments")
	public Page<Comment> getAllCommentsByAccountId(@PathVariable(value = "accountId") Long accountId,
			Pageable pageable) {
		return commentRepository.findByAccountIdAcc(accountId, pageable);
	}

	@GetMapping("/stadiums/{stadiumId}/comments")
	public Page<Comment> getAllCommentsByStadiumId(@PathVariable(value = "stadiumId") Long stadiumId,
			Pageable pageable) {
		return commentRepository.findByStadiumIdSta(stadiumId, pageable);
	}

	@PostMapping("/crecomments/{accountId}/{stadiumId}")
	public Comment createComment(@PathVariable(value = "accountId") Long accountId,
			@PathVariable(value = "stadiumId") Long stadiumId, @Valid @RequestParam(required = false) String cmt) {
		Comment comment = new Comment();
		Optional<Account> acc = accountRepository.findById(accountId);
		Optional<Stadium> sta = stadiumRepository.findById(stadiumId);
		comment.setAccount(acc.get());
		comment.setStadium(sta.get());
		comment.setCmt(cmt);
		return commentRepository.save(comment);

	}

	@PutMapping("/editComments/{accountId}/{stadiumId}/{commentId}")
	public Comment updateComment(@PathVariable(value = "accountId") Long accountId,
			@PathVariable(value = "stadiumId") Long stadiumId, @PathVariable(value = "commentId") Long commentId,
			@Valid @RequestParam(required = false) String cmt) {
		if (!accountRepository.existsById(accountId)) {
			throw new ResourceNotFoundException("AccountId " + accountId + " not found");
		}
		if (!stadiumRepository.existsById(stadiumId)) {
			throw new ResourceNotFoundException("StadiumId " + stadiumId + " not found");
		}
		return commentRepository.findById(commentId).map(comment -> {
		Optional<Account> acc = accountRepository.findById(accountId);
		Optional<Stadium> sta = stadiumRepository.findById(stadiumId);
		comment.setAccount(acc.get());
		comment.setStadium(sta.get());
		comment.setCmt(cmt);
		return commentRepository.save(comment);
		}).orElseThrow(() -> new ResourceNotFoundException("stadiumId " + commentId + "not found"));

	}

	@DeleteMapping("/deleteComment/{accountId}/{stadiumId}/{commentId}")
	public ResponseEntity<?> deleteComment(@PathVariable(value = "accountId") Long accountId,
			@PathVariable(value = "stadiumId") Long stadiumId, @PathVariable(value = "commentId") Long commentId) {
		return commentRepository.findByIdComAndAccountIdAccAndStadiumIdSta(commentId, accountId, stadiumId)
				.map(comment -> {
					commentRepository.delete(comment);
					return ResponseEntity.ok().build();
				}).orElseThrow(() -> new ResourceNotFoundException("Comment not found with id " + commentId
						+ " and accountId " + accountId + "and stadiumId" + stadiumId));
	}

}
